import styles from "./MainSidebar.module.scss";
import { Link } from "react-router";
import { ROUTES } from "@/shared/config/routes";
import SidebarToggle from "../assets/SidebarToggle.svg?react";
import LogoTree from "@/shared/assets/icons/yeahubLogos/logoTree.svg?react";
import LogoText from "@/shared/assets/icons/yeahubLogos/logoBlackText.svg?react";

interface MainSidebarHeaderProps {
  isOpen: boolean;
  onToggle: () => void;
  device: "mobile" | "desktop";
}

export const MainSidebarHeader = ({
  isOpen,
  onToggle,
  device,
}: MainSidebarHeaderProps) => {
  return (
    <div className={styles.header}>
      <Link to={ROUTES.profile} className={styles.logoLink}>
        <LogoTree className={styles.logo} />
        {device === "desktop" && isOpen && (
          <LogoText className={styles.logoText} />
        )}
      </Link>
      {device === "desktop" && (
        <button onClick={onToggle} className={styles.toggle}>
          <SidebarToggle />
        </button>
      )}
    </div>
  );
};
