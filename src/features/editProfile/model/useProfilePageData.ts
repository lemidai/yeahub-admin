import { useGetSpecializationsQuery } from "@/entities/specialization";
import { useGetFullUserDataQuery } from "@/entities/user";
import type { Profile } from "@/entities/profile";

export const useProfilePageData = () => {
  const {
    data: fullUserData,
    isLoading: isLoadingFullUserData,
    error: fullUserDataQueryError,
  } = useGetFullUserDataQuery();

  const {
    data: specializationsResponse,
    isLoading: isLoadingSpecializations,
    error: specializationsQueryError,
  } = useGetSpecializationsQuery();

  const activeProfile = fullUserData?.profiles.find(
    (profile: Profile) => profile.isActive,
  );

  const selectedSpecialization = specializationsResponse?.data.find(
    (item) => item.id === activeProfile?.specializationId,
  );

  const errors = [specializationsQueryError, fullUserDataQueryError].filter(
    (error): error is Error => error !== undefined && error !== null,
  );

  return {
    fullUserData,
    activeProfile,
    selectedSpecialization,
    specializationsResponse,
    isLoading: isLoadingFullUserData || isLoadingSpecializations,
    errors,
    hasErrors: errors.length > 0,
  };
};
