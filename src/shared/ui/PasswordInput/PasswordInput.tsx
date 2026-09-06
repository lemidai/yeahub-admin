import styles from "./PasswordInput.module.scss";
import clsx from "clsx";
import { useState } from "react";
import { Input } from "../Input";
import Eye from "@/shared/assets/icons/Eye.svg?react";

export function PasswordInput({ ...props }) {
  const [showPassword, setShowPassword] = useState(false);
  const { error } = props;

  return (
    <div className={styles.wrapper}>
      <Input type={showPassword ? "text" : "password"} {...props} />
      <button
        type="button"
        className={styles.hideButton}
        onClick={() => setShowPassword((prev) => !prev)}
        tabIndex={-1}
      >
        <Eye
          className={clsx(
            showPassword && styles.hideIcon,
            error && styles.errorIcon,
          )}
        />
      </button>
    </div>
  );
}
