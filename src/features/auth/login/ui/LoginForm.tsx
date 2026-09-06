import styles from "./LoginForm.module.scss";
// import { getLoginErrorMessage } from "../model/getLoginErrorMessage";
import { useForm } from "react-hook-form";
import { Input } from "@/shared/ui/Input";
import { PasswordInput } from "@/shared/ui/PasswordInput/PasswordInput";
import { Button } from "@/shared/ui/Button/Button";
import { useNavigate } from "react-router";
import { useLoginMutation } from "../../api/authApi";
import { isFetchBaseQueryError } from "@/shared/api";
import { useAppDispatch } from "@/app/store";
import { showToast } from "@/shared/toaster/model/toastSlice";

type LoginFormState = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormState>({});

  const onSubmit = async (data: LoginFormState) => {
    try {
      await login({
        username: data.email,
        password: data.password,
      }).unwrap();
      navigate("/profile");
    } catch (error) {
      if (isFetchBaseQueryError(error) && error.status === 401) {
        dispatch(
          showToast({
            type: "error",
            text: "Неверный логин или пароль.",
          }),
        );
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <Input label="Введите электронную почту" {...register("email")} />
      <PasswordInput label="Введите пароль" {...register("password")} />
      {errors.root?.message && (
        <div className={styles.error}>{errors.root.message}</div>
      )}
      <Button
        size="lg"
        className={styles.loginButton}
        type="submit"
        loading={isLoading}
      >
        Войти
      </Button>
    </form>
  );
};
