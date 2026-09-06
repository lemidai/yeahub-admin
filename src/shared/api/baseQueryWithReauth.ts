import type {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { baseQuery } from "./baseQuery";
import { AUTH_PATHS, AUTH_PATHS_MAP } from "@/features/auth/model/constants";
import { clearSession, saveSession } from "@/features/auth/lib/session";

type RefreshResponse = {
  access_token: string;
};

type FetchArgsType = {
  url: string;
};

const extractUrl = (url: string | FetchArgsType) => {
  return typeof url === "string" ? url : url.url;
};

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status !== 401) {
    return result;
  }

  const url = extractUrl(args);

  if (AUTH_PATHS.some((path) => url.endsWith(path))) {
    return result;
  }

  const refreshResult = await baseQuery(
    {
      url: AUTH_PATHS_MAP.refresh,
      method: "GET",
    },
    api,
    extraOptions,
  );

  if (refreshResult.error) {
    clearSession(api.dispatch);
    return result;
  }

  const sessionData = refreshResult.data as RefreshResponse | undefined;

  if (!sessionData) {
    clearSession(api.dispatch);
    return result;
  }

  saveSession(api.dispatch, sessionData.access_token);

  result = await baseQuery(args, api, extraOptions);

  return result;
};
