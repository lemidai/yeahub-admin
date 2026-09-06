import styles from "./AuthHeader.module.scss";
import { Link } from "react-router";
import { ROUTES } from "@/shared/config/routes";
import LogoBlackText from "@shared/assets/icons/yeahubLogos/logoBlackText.svg?react";
import LogoPurpleTree from "@shared/assets/icons/yeahubLogos/logoTree.svg?react";

export const AuthHeader = () => {
  return (
    <div className={styles.header}>
      <Link to={ROUTES.login} className={styles.link}>
        <LogoPurpleTree className={styles.logoTree} />
        <LogoBlackText className={styles.logoText} />
      </Link>
    </div>
  );
};
