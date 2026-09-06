import styles from "./Skeleton.module.scss";
import clsx from "clsx";
import { type HTMLAttributes } from "react";

export type SkeletonProps = HTMLAttributes<HTMLDivElement>;

export const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div className={clsx(styles.root, className)} aria-hidden {...props} />
  );
};
