import { baseApi } from "@/shared/api/baseApi";
import type { GetSkillsParams, GetSkillsResponse } from "../model/types";

export const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSkills: build.query<GetSkillsResponse, GetSkillsParams | void>({
      query: (params) => ({
        url: "skills",
        method: "GET",
        params: params || undefined,
      }),
    }),
  }),
});

export const { useGetSkillsQuery } = skillApi;
