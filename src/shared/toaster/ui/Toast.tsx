import styles from "./Toast.module.scss";
import clsx from "clsx";
import { useEffect, useState } from "react";
import SuccessIcon from "@shared/assets/icons/toast/Success.svg?react";
import ErrorIcon from "@shared/assets/icons/toast/Error.svg?react";
import type { Toast } from "../model/types";

const iconMap = {
  success: SuccessIcon,
  error: ErrorIcon,
};

interface Props {
  toast: Toast;
  onClose: (id: string) => void;
  duration?: number;
}

export const ToastItem = ({ toast, onClose, duration = 3000 }: Props) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        onClose(toast.id);
      }, 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, toast.id, onClose]);

  const Icon = iconMap[toast.type];

  return (
    <div
      className={clsx(
        styles.toast,
        styles[toast.type],
        isExiting && styles.exiting,
      )}
    >
      <div className={styles.icon}>
        <Icon />
      </div>
      <div className={styles.content}>
        <p className={styles.message}>{toast.text}</p>
      </div>
      <button
        onClick={() => {
          setIsExiting(true);
          setTimeout(() => onClose(toast.id), 300);
        }}
      >
        ×
      </button>
    </div>
  );
};
