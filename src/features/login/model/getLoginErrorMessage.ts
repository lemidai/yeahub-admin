import { isFetchBaseQueryError, isSerializedError } from "@/shared/api";
import type { LoginFormError } from "./types";

export const getLoginErrorMessage = (error: unknown): LoginFormError => {
  if (isFetchBaseQueryError(error)) {
    return error.status === 401
      ? {
          type: "server",
          message: "Неверные почта или пароль",
        }
      : {
          type: "server",
          message: `Ошибка сервера: ${error.status}`,
        };
  }

  if (isSerializedError(error)) {
    return {
      type: "serialized",
      message: error.message ?? "Произошла ошибка",
    };
  }

  return {
    type: "unknown",
    message: "Неизвестная ошибка",
  };
};
