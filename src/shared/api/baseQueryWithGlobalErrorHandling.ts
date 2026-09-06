import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";

import { baseQueryWithReauth } from "./baseQueryWithReauth";
import { showToast } from "../toaster/model/toastSlice";

const isServerError = (status: FetchBaseQueryError["status"]) =>
  typeof status === "number" && status >= 500;

const isNetworkError = (status: FetchBaseQueryError["status"]) =>
  status === "FETCH_ERROR" || status === "TIMEOUT_ERROR";

export const baseQueryWithGlobalErrorHandling: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQueryWithReauth(args, api, extraOptions);

  if (!result.error) {
    return result;
  }

  const { status } = result.error;

  if (isServerError(status)) {
    api.dispatch(
      showToast({
        type: "error",
        text: "Произошла ошибка сервера. Попробуйте повторить запрос позже.",
      }),
    );
  }

  if (isNetworkError(status)) {
    api.dispatch(
      showToast({
        type: "error",
        text: "Не удалось связаться с сервером. Проверьте подключение к интернету.",
      }),
    );
  }

  return result;
};
