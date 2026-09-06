import { baseApi } from "@/shared/api/baseApi";
import type {
  GetSpecializationsParams,
  GetSpecializationsResponse,
} from "../model/types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSpecializations: build.query<
      GetSpecializationsResponse,
      GetSpecializationsParams | void
    >({
      query: (params) => ({
        url: "specializations",
        method: "GET",
        params: params || undefined,
      }),
    }),
  }),
});

export const { useGetSpecializationsQuery } = userApi;
