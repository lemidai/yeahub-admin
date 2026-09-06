import styles from "./Select.module.scss";
import clsx from "clsx";
import type { InputHTMLAttributes } from "react";

interface Option {
  value: string | number;
  label: string;
}

type SelectProps = Omit<InputHTMLAttributes<HTMLSelectElement>, "className"> & {
  options: Option[];
  onChange: (value: number | string) => void;
  value?: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
};

export const Select = ({
  options,
  onChange,
  value,
  disabled,
  placeholder,
  className = "",
  ...props
}: SelectProps) => {
  return (
    <select
      className={clsx(styles.select, className)}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      {...props}
    >
      <option value="">{value || placeholder}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
