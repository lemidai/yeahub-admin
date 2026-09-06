import styles from "./AuthSidebar.module.scss";
import { Link } from "react-router";
import { ROUTES } from "@/shared/config/routes";
import LogoWhiteText from "@/shared/assets/icons/yeahubLogos/logoWhiteText.svg?react";
import LogoWhiteTree from "@/shared/assets/icons/yeahubLogos/logoWhiteTree.svg?react";

export const AuthSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.content}>
        <Link to={ROUTES.login} className={styles.link}>
          <LogoWhiteTree className={styles.logoTree} />
          <LogoWhiteText className={styles.logoText} />
        </Link>
        <p className={styles.text}>YeaHub объединяет IT-специалистов</p>
      </div>
    </div>
  );
};
