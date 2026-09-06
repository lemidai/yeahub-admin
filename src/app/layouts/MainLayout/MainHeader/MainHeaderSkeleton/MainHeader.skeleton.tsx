import styles from "./MainHeader.skeleton.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const MainHeaderSkeleton = () => {
  return (
    <div className={styles.headerSkeleton}>
      <div className={styles.headerContentWrapperSkeleton}>
        <Skeleton className={styles.username} />
        <Skeleton className={styles.avatar} />
      </div>
    </div>
  );
};
