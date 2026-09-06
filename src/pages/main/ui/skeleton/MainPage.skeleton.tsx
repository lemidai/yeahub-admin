import styles from "./MainPage.skeleton.module.scss";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";

export const MainPageSkeleton = () => {
  return <Skeleton className={styles.mainPageSkeleton} />;
};
