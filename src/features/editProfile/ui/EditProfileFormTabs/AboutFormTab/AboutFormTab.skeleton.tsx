import styles from "./AboutFormTab.skeleton.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const AboutFormTabSkeleton = () => {
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.sectionInfo}>
          <Skeleton className={styles.sectionTitle} />
          <Skeleton className={styles.sectionDescription} />
        </div>
        <div className={styles.controllers}>
          <Skeleton className={styles.controller} />
        </div>
      </div>
    </div>
  );
};
