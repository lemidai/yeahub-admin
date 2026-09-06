import type { Profile } from "@/entities/profile";
import type { Specialization } from "@/entities/specialization";
import type { FullUserData } from "@/entities/user/model/types";

export const mapProfilePageData = ({
  fullUserData,
  activeProfile,
  selectedSpecialization,
}: {
  fullUserData: FullUserData;
  activeProfile: Profile;
  selectedSpecialization?: Specialization;
}) => ({
  personal: {
    city: fullUserData.city ?? "",
    username: fullUserData.username ?? "",
    email: fullUserData.email ?? "",
    specialization: selectedSpecialization,
    avatar: fullUserData.avatarUrl ?? "",
    socialNetwork: activeProfile.socialNetwork ?? [],
  },
  about: {
    description: activeProfile.description ?? "",
  },
  skills: {
    skills: activeProfile.profileSkills ?? [],
  },
});
