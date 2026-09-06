import styles from "./MainSidebar.module.scss";
import clsx from "clsx";
import { Link, useLocation } from "react-router";
import type { SidebarNavItem } from "./sidebar.types";

interface MainSidebarNavProps {
  items: SidebarNavItem[];
  device: "mobile" | "desktop";
  isOpen: boolean;
  onNavigate: () => void;
}

export const MainSidebarNav = ({
  items,
  device,
  isOpen,
  onNavigate,
}: MainSidebarNavProps) => {
  const location = useLocation();
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <li className={styles.option} key={item.path}>
              <Link
                to={item.path}
                onClick={onNavigate}
                className={clsx(
                  styles.link,
                  location.pathname === item.path && styles.active,
                )}
              >
                <Icon className={styles.icon} />
                {device === "mobile" ? item.title : isOpen && item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
