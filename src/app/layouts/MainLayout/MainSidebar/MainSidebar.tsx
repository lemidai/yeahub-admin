import styles from "./MainSidebar.module.scss";
import clsx from "clsx";
import { MainSidebarNav } from "./MainSidebarNav";
import { MainSidebarHeader } from "./MainSidebarHeader";
import { MainSidebarButtons } from "./MainSidebarButtons";
import { SIDEBAR_BOTTOM_BUTTONS, SIDEBAR_NAV_ITEMS } from "./sidebar.config";
import { useLazyLogoutQuery } from "@/features/auth/api/authApi";
import { EXTERNAL_LINKS } from "@/shared/config/externalLinks";
import { useDevice } from "@/shared/lib/hooks/useDevice";
import type { RefObject } from "react";
import type { SidebarActions, SidebarDevice } from "./sidebar.types";

interface MainSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  sidebarRef: RefObject<HTMLDivElement | null>;
}

const getVisibleItems = <T extends { hideOn?: readonly SidebarDevice[] }>(
  items: readonly T[],
  device: SidebarDevice,
) => items.filter((item) => !item.hideOn?.includes(device));

export const MainSidebar = ({
  isOpen,
  onToggle,
  onClose,
  sidebarRef,
}: MainSidebarProps) => {
  const { isMobileOrTablet } = useDevice();
  const [logout] = useLazyLogoutQuery();
  const device: SidebarDevice = isMobileOrTablet ? "mobile" : "desktop";

  const navItems = getVisibleItems(SIDEBAR_NAV_ITEMS, device);
  const buttons = getVisibleItems(SIDEBAR_BOTTOM_BUTTONS, device);

  const buttonActions: SidebarActions = {
    support: () => {
      window.open(EXTERNAL_LINKS.telegram, "_blank", "noopener,noreferrer");
    },
    logout: () => logout(),
  };

  if (device === "mobile" && !isOpen) {
    return null;
  }

  return (
    <div
      className={clsx(styles.sidebar, isOpen && styles.open)}
      ref={sidebarRef}
    >
      <MainSidebarHeader isOpen={isOpen} onToggle={onToggle} device={device} />
      <MainSidebarNav
        items={navItems}
        device={device}
        isOpen={isOpen}
        onNavigate={onClose}
      />
      <MainSidebarButtons
        buttons={buttons}
        device={device}
        isOpen={isOpen}
        actions={buttonActions}
      />
    </div>
  );
};
