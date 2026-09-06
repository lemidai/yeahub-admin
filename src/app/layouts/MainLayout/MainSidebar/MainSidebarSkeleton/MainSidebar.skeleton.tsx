import styles from "./MainSidebar.skeleton.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const MainSidebarSkeleton = () => {
  return (
    <div className={styles.sidebarSkeleton}>
      <div className={styles.iconNavigation}>
        <Skeleton className={styles.icon} />
        <Skeleton className={styles.iconText} />
      </div>
      <div className={styles.navigation}>
        <Skeleton className={styles.navOption} />
        <Skeleton className={styles.navOption} />
        <Skeleton className={styles.navOption} />
        <Skeleton className={styles.navOption} />
      </div>
      <div className={styles.bottomButtons}>
        <Skeleton className={styles.button} />
      </div>
    </div>
  );
};
