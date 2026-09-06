import styles from "./MainErrorFallback.module.scss";
import { refreshPage } from "@/shared/lib/browser/refreshPage";
import { Button } from "@/shared/ui/Button/Button";

export const MainErrorFallback = () => {
  return (
    <div className={styles.error}>
      <p>Что-то пошло не так.</p>
      <p>Попробуйте обновить страницу или зайдите позже.</p>
      <Button size="lg" onClick={refreshPage}>
        Обновить страницу
      </Button>
    </div>
  );
};
