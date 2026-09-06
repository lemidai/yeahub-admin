import { useGetFullUserDataQuery } from "@/entities/user";
import type { Profile } from "@/entities/profile";

export const useFullUserData = () => {
  const {
    data: fullUserData,
    isLoading,
    error,
    isError,
  } = useGetFullUserDataQuery();

  const activeProfile = fullUserData?.profiles.find(
    (profile: Profile) => profile.isActive,
  );

  return {
    fullUserData,
    activeProfile,
    isLoading,
    error,
    isError,
  };
};
