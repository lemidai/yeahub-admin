import { baseApi } from "@/shared/api/baseApi";
import type { EditUserRequestData, FullUserData, User } from "../model/types";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFullUserData: build.query<FullUserData, void>({
      query: () => ({
        url: "/auth/profile",
        method: "GET",
      }),
      providesTags: ["FullUserData"],
    }),
    updateUser: build.mutation<User, EditUserRequestData>({
      query: ({ id, ...userInfo }) => ({
        url: `users/${id}`,
        body: { ...userInfo },
        method: "PATCH",
      }),
    }),
  }),
});

export const {
  useUpdateUserMutation,
  useGetFullUserDataQuery,
  useLazyGetFullUserDataQuery,
} = userApi;
