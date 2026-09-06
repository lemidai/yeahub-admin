import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { getAccessToken } from "../lib/browser/localStorage/accessToken";

export const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_APP_API_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      headers.set("Authorization", `Bearer ${accessToken}`);
    }

    return headers;
  },
});
