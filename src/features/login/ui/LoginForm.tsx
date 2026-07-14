import styles from "./LoginForm.module.scss";

import { useAppDispatch } from "@/app/store";
import type { SubmitEvent } from "react";
import { useLoginMutation } from "../api/loginApi";
import { establishSession } from "@/entities/session/model/establishSession";
import { getLoginErrorMessage } from "../model/getLoginErrorMessage";

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const handleLoginFormSubmit = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    try {
      const sessionData = await login({
        username: formData.get("email"),
        password: formData.get("password"),
      }).unwrap();
      establishSession(dispatch, sessionData);
    } catch (error) {
      console.log(getLoginErrorMessage(error).message);
    }
  };
  return (
    <form onSubmit={handleLoginFormSubmit} className={styles.form}>
      <label htmlFor="email">Email</label>
      <input id="email" name="email" type="email" className={styles.control} />
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        className={styles.control}
      />
      <button>Войти</button>
    </form>
  );
};
