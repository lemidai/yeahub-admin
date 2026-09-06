import { baseApi } from "@/shared/api/baseApi";
import type { EditProfileRequestData, Profile } from "../model/types";

export const profileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    updateProfile: build.mutation<Profile, EditProfileRequestData>({
      query: ({ id, ...profile }) => ({
        url: `profiles/${id}`,
        body: profile,
        method: "PUT",
      }),
    }),
  }),
});

export const { useUpdateProfileMutation } = profileApi;
