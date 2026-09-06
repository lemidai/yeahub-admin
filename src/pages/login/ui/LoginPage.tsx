import styles from "./LoginPage.module.scss";
import { LoginForm } from "@features/auth/login/ui/LoginForm";

export const LoginPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.head}>Вход в личный кабинет</h1>
      <LoginForm />
    </div>
  );
};
