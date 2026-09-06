import styles from "./NotFoundPage.module.scss";
import { ROUTES } from "@/shared/config/routes";
import { Link } from "react-router";
import IconBlackText from "@/shared/assets/icons/yeahubLogos/logoBlackText.svg?react";

export function NotFoundPage() {
  return (
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.info}>
          <IconBlackText className={styles.icon} />
          <h1 className={styles.status}>404</h1>
        </div>
        <p className={styles.description}>Страница не найдена.</p>
        <Link to={ROUTES.profile} className={styles.link}>
          На главную
        </Link>
      </div>
    </div>
  );
}
