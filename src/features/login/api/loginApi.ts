import { AUTH_PATHS_MAP } from "@/entities/session/model/constants";
import { baseApi } from "@/shared/api/baseApi";

export const loginApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (body) => ({
        url: AUTH_PATHS_MAP.login,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApi;
