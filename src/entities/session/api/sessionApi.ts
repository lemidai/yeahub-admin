import { baseApi } from "@/shared/api/baseApi";
import type { LogoutResponse, SessionData } from "../model/types";
import { AUTH_PATHS_MAP } from "../model/constants";
import { removeSession } from "../model/sessionSlice";
import { clearSessionDataInLS } from "../lib/helpers";

export function injectSessionApi() {
  if (!baseApi) {
    throw new Error("baseApi не проинициализирован: сначала вызовите initSessionTransport() в app/store/initAppStore.");
  }

  return baseApi.injectEndpoints({
    endpoints: (build) => ({
      refresh: build.query<SessionData, void>({
        query: () => ({
          url: AUTH_PATHS_MAP.refresh,
          method: "GET",
        }),
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
            dispatch(removeSession());
            clearSessionDataInLS();
          }
        },
      }),
    }),
  });
}
