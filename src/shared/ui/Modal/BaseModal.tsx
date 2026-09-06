import styles from "./BaseModal.module.scss";
import type { ReactNode } from "react";

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
};

export const BaseModal = ({ children, onClose }: ModalProps) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.contentWrapper}>
        <button onClick={onClose} className={styles.closeModalButton}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};
