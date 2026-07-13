import { createApi } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { API_REDUCER_PATH } from "./constants";

export function createBaseApi(baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>) {
  return createApi({
    reducerPath: API_REDUCER_PATH,
    baseQuery,
    endpoints: () => ({}),
  });
}

export let baseApi!: ReturnType<typeof createBaseApi>;

export function initBaseApi(baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError>) {
  if (!baseApi) {
    baseApi = createBaseApi(baseQuery);
  }
  return baseApi;
}
