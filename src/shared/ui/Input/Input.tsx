import type { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import clsx from "clsx";

export type InputError = {
  message?: string;
  [key: string]: unknown;
};

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "className"
> & {
  label?: string;
  error?: string | InputError;
  className?: string;
  controlClassName?: string;
  disabled?: boolean;
};

export function Input({
  label,
  error,
  id,
  className,
  controlClassName,
  disabled,
  ...props
}: InputProps) {
  const inputId = id ?? props.name;
  const errorMessage = typeof error === "string" ? error : error?.message;

  return (
    <div className={clsx(styles.wrapper, className)}>
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        disabled={disabled}
        className={clsx(
          styles.input,
          error && styles.inputError,
          controlClassName,
        )}
        aria-invalid={Boolean(error)}
        aria-describedby={error && inputId ? `${inputId}-error` : undefined}
        {...props}
      />
      {errorMessage && inputId && (
        <span id={`${inputId}-error`} className={styles.errorText} role="alert">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
