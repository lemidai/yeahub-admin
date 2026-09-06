import styles from "./MainHeader.module.scss";
import { Link } from "react-router";
import { MainHeaderSkeleton } from "./MainHeaderSkeleton/MainHeader.skeleton";
import { MainHeaderPopover } from "./MainHeaderPopover";
import { usePopover } from "@/app/layouts/MainLayout/usePopover";
import { useLazyLogoutQuery } from "@/features/auth/api/authApi";
import { useGetFullUserDataQuery } from "@/entities/user";
import { useDevice } from "@/shared/lib/hooks/useDevice";
import { ROUTES } from "@/shared/config/routes";
import DefaultAvatar from "@/shared/assets/icons/DefaultAvatar.svg";
import LogoTree from "@/shared/assets/icons/yeahubLogos/logoTree.svg?react";
import BurgerIcon from "../assets/Burger.svg?react";
import type { RefObject } from "react";
import type { HeaderActions } from "./header.types";

interface MainHeaderProps {
  sidebarToggleHandler: () => void;
  sidebarTogglerRef: RefObject<HTMLButtonElement | null>;
}

export const MainHeader = ({
  sidebarToggleHandler,
  sidebarTogglerRef,
}: MainHeaderProps) => {
  const { isMobileOrTablet, isDesktop } = useDevice();
  const { data, isLoading } = useGetFullUserDataQuery();
  const [logout] = useLazyLogoutQuery();
  const { isOpen, popoverRef, triggerRef, toggle, close } = usePopover();

  const buttonActions: HeaderActions = {
    logout: () => logout(),
  };

  if (isLoading && isDesktop) {
    return <MainHeaderSkeleton />;
  }

  return (
    <header className={styles.header}>
      {isMobileOrTablet && (
        <>
          <Link to={ROUTES.main}>
            <LogoTree className={styles.icon} />
          </Link>
          <button
            ref={sidebarTogglerRef}
            type="button"
            onClick={sidebarToggleHandler}
          >
            <BurgerIcon />
          </button>
        </>
      )}
      {isDesktop && data && (
        <>
          <button
            className={styles.headerPopoverToggle}
            onClick={toggle}
            ref={triggerRef}
          >
            <p className={styles.username}>{data?.username}</p>
            <img
              src={data?.avatarUrl || DefaultAvatar}
              alt=""
              className={styles.avatar}
            />
          </button>
          {isOpen && (
            <MainHeaderPopover
              actions={buttonActions}
              popoverRef={popoverRef}
              onClose={close}
              avatarUrl={data.avatarUrl}
              username={data.username}
              email={data.email}
            />
          )}
        </>
      )}
    </header>
  );
};
