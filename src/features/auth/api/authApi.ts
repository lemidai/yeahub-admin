import { baseApi } from "@/shared/api/baseApi";
import { AUTH_PATHS_MAP } from "../model/constants";
import { clearSession, saveSession } from "../lib/session";
import type { LogoutResponse } from "../model/types";
import type { LoginRequest, LoginResponse } from "../login/types";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: AUTH_PATHS_MAP.login,
        method: "POST",
        body,
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        saveSession(dispatch, data.access_token);
      },
    }),
    logout: build.query<LogoutResponse, void>({
      query: () => ({
        url: AUTH_PATHS_MAP.logout,
        method: "GET",
      }),
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } finally {
          clearSession(dispatch);
        }
      },
    }),
  }),
});

export const { useLoginMutation, useLazyLogoutQuery } = authApi;
