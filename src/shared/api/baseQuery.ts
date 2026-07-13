import { fetchBaseQuery, type BaseQueryFn, type FetchArgs, type FetchBaseQueryError } from "@reduxjs/toolkit/query";

export type CreateBaseQueryOptions = {
  getAccessToken?: (state: unknown) => string | null;
};

export function createBaseQuery(options?: CreateBaseQueryOptions): BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> {
  return fetchBaseQuery({
    baseUrl: import.meta.env.VITE_APP_API_URL,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
      const state = getState();
      const accessToken = options?.getAccessToken?.(state);
      if (accessToken) {
        headers.set("Authorization", `Bearer ${accessToken}`);
      }
      return headers;
    },
  });
}
