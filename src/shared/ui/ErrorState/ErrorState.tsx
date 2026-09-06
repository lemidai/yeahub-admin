import styles from "./ErrorState.module.scss";
import { Button } from "../Button";

interface Props {
  message: string;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const ErrorState = ({ message, action }: Props) => {
  return (
    <div className={styles.error}>
      <p>{message}</p>

      {action && (
        <Button size="lg" onClick={action.onClick}>
          {action.label}
        </Button>
      )}
    </div>
  );
};
