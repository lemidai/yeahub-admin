import styles from "./AuthLayout.module.scss";
import { Outlet } from "react-router";
import { AuthNav } from "./AuthNav/AuthNav";

export const AuthLayout = () => {
  return (
    <div className={styles.layout}>
      <AuthNav />
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
};
