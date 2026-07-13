import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { AUTH_PATHS, AUTH_PATHS_MAP } from "../model/constants";
import { removeSession } from "../model/sessionSlice";
import { type SessionData } from "../model/types";
import { establishSession } from "../model/establishSession";

type FetchArgsType = {
  url: string;
};

const extractUrl = (url: string | FetchArgsType) => {
  return typeof url === "string" ? url : url.url;
};

export const withReauth = (
  baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>,
): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> => {
  return async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    if (result.error?.status !== 401) {
      return result;
    }

    const url = extractUrl(args);
    if (AUTH_PATHS.some((path) => url.endsWith(path))) {
      return result;
    }

    try {
      const refreshResult = await baseQuery(
        {
          url: AUTH_PATHS_MAP.refresh,
          method: "GET",
        },
        api,
        extraOptions,
      );

      if (refreshResult.error) {
        throw new Error("Не удалось обновить данные пользовательской сессии");
      }

      const sessionData = refreshResult.data as SessionData | undefined;
      if (!sessionData) {
        throw new Error("Отсутствуют данные пользовательской сессии");
      }

      establishSession(api.dispatch, sessionData);
      result = await baseQuery(args, api, extraOptions);
    } catch {
      api.dispatch(removeSession());
    }

    return result;
  };
};
