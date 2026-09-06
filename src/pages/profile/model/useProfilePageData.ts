import { useGetSpecializationsQuery } from "@/entities/specialization";
import { mapProfilePageData } from "../lib/mapProfilePageData";
import { useFullUserData } from "@/entities/user/model/useFullUserData";

export const useProfilePageData = () => {
  const {
    fullUserData,
    activeProfile,
    isLoading: isLoadingFullUserData,
    error: fullUserDataQueryError,
  } = useFullUserData();

  const {
    data: specializationsResponse,
    isLoading: isLoadingSpecializations,
    error: specializationsQueryError,
  } = useGetSpecializationsQuery();

  const selectedSpecialization = specializationsResponse?.data.find(
    (item) => item.id === activeProfile?.specializationId,
  );

  const errors = [specializationsQueryError, fullUserDataQueryError].filter(
    (error): error is Error => error !== undefined && error !== null,
  );

  const profilePageData =
    fullUserData && activeProfile
      ? mapProfilePageData({
          fullUserData,
          activeProfile,
          selectedSpecialization,
        })
      : undefined;

  return {
    profilePageData,
    isLoading: isLoadingFullUserData || isLoadingSpecializations,
    errors,
    hasErrors: errors.length > 0,
  };
};
