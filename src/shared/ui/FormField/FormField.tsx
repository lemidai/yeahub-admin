import styles from "./FormField.module.scss";
import clsx from "clsx";
import {
  useController,
  type Control,
  type ControllerRenderProps,
  type FieldError,
  type FieldPath,
  type FieldValues,
  type RegisterOptions,
} from "react-hook-form";

type FormFieldProps<T extends FieldValues, TName extends FieldPath<T>> = {
  control: Control<T>;
  rules?: RegisterOptions<T, TName>;
  name: TName;
  label?: string;
  className?: string;
  render: (
    field: ControllerRenderProps<T, TName> & {
      error: FieldError | undefined;
    },
  ) => React.ReactNode;
};
export const FormField = <T extends FieldValues, TName extends FieldPath<T>>({
  control,
  rules,
  name,
  label,
  className,
  render,
}: FormFieldProps<T, TName>) => {
  const { field, fieldState } = useController({ name, control, rules });
  const content = render({ ...field, error: fieldState.error });

  if (label) {
    return (
      <label className={clsx(styles.inputLabel, className)}>
        {label}
        {content}
      </label>
    );
  }

  return <>{content}</>;
};
