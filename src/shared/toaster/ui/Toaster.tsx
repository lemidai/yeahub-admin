import styles from "./Toaster.module.scss";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { createPortal } from "react-dom";
import { ToastItem } from "./Toast";
import { useCallback } from "react";
import { removeToast } from "../model/toastSlice";
import { selectToasts } from "../model/selectors";

export const Toaster = () => {
  const dispatch = useAppDispatch();
  const toasts = useAppSelector(selectToasts);

  const handleClose = useCallback(
    (id: string) => {
      dispatch(removeToast(id));
    },
    [dispatch],
  );

  return createPortal(
    <div className={styles.toaster}>
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          toast={toast}
          onClose={handleClose}
          duration={3000}
        />
      ))}
    </div>,
    document.body,
  );
};
