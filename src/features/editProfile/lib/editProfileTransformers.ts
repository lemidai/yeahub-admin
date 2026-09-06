import { fileToBase64 } from "@/shared/lib/file/fileToBase64";
import type {
  EditUserRequestData,
  FullUserData,
} from "@/entities/user/model/types";
import type { Profile } from "@/entities/profile";
import type {
  EditProfileRequestData,
  SocialNetwork,
} from "@/entities/profile/model/types";
import type { EditProfileFormData } from "../ui/EditProfileForm";

export const fullUserDataToFormValues = (
  user: FullUserData,
  profile: Profile,
) => {
  return {
    avatar: { serverAvatar: user.avatarUrl, selectedAvatar: undefined },
    username: user.username ?? undefined,
    email: user.email ?? undefined,
    specialization: profile.specializationId ?? undefined,
    city: user.city ?? undefined,
    socialNetwork: profile.socialNetwork ?? [],
    description: profile.description ?? undefined,
    skills: profile.profileSkills.map((skill) => skill.id) ?? [],
  };
};

export const formValuesToRequest = async (
  user: FullUserData,
  profile: Profile,
  formValues: EditProfileFormData,
) => {
  const avatarImage = formValues.avatar.selectedAvatar
    ? await fileToBase64(formValues.avatar.selectedAvatar)
    : null;

  const userRequestData: EditUserRequestData = {
    id: user.id,
    username: formValues.username ?? null,
    country: user.country ?? null,
    city: formValues.city ?? null,
    birthday: user.birthday ?? null,
    address: user.address ?? null,
    avatarUrl: formValues.avatar.selectedAvatar
      ? ""
      : formValues.avatar.serverAvatar,
    avatarImage,
  };

  const profileRequestData: EditProfileRequestData = {
    id: profile.id,
    userId: user.id,
    markingWeight: profile.markingWeight,
    specializationId: formValues.specialization,
    description: formValues.description || null,
    image_src: profile.image_src,
    socialNetwork: formValues.socialNetwork.filter(
      (sn): sn is SocialNetwork => sn !== null && !!sn?.title,
    ),
    profileSkills: formValues.skills.map((id) => String(id)),
  };

  return { userRequestData, profileRequestData };
};
