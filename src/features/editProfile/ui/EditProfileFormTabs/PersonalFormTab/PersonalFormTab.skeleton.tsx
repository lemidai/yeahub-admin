import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import styles from "./PersonalFormTab.skeleton.module.scss";

export const PersonalFormTabSkeleton = () => {
  return (
    <div className={styles.formTab}>
      <div className={styles.section}>
        <div className={styles.sectionInfo}>
          <Skeleton className={styles.sectionTitle} />
          <Skeleton className={styles.sectionDescription} />
        </div>
        <div className={styles.controllers}>
          <Skeleton className={styles.controller} />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionInfo}>
          <Skeleton className={styles.sectionTitle} />
          <Skeleton className={styles.sectionDescription} />
        </div>
        <div className={styles.controllers}>
          <Skeleton className={styles.controller} />
        </div>
      </div>
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
