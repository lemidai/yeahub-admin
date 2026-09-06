import styles from "./ProfilePageSkeleton.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const ProfilePageSkeleton = () => {
  return (
    <div className={styles.page}>
      <Skeleton className={styles.section} />
      <Skeleton className={styles.section} />
      <Skeleton className={styles.section} />
    </div>
  );
};
