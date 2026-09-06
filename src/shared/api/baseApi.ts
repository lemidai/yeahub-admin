import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithGlobalErrorHandling } from "./baseQueryWithGlobalErrorHandling";
import { API_REDUCER_PATH } from "./constants";

export const baseApi = createApi({
  reducerPath: API_REDUCER_PATH,
  baseQuery: baseQueryWithGlobalErrorHandling,
  tagTypes: ["FullUserData"],
  endpoints: () => ({}),
});
