import styles from "./SkillsFormTab.skeleton.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const SkillsFormTabSkeleton = () => {
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.sectionInfo}>
          <Skeleton className={styles.sectionTitle} />
          <Skeleton className={styles.sectionDescription} />
        </div>
        <div className={styles.controller}>
          <div className={styles.select}>
            <Skeleton className={styles.selectTitle} />
            <Skeleton className={styles.selectField} />
          </div>
          <div className={styles.controllerSelectedOptions}>
            <Skeleton className={styles.optionsTitle} />
            <Skeleton className={styles.selectedOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};
