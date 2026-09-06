import styles from "./EditProfileForm.module.scss";
import z from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate } from "react-router";
import { editProfileFormSchema } from "../model/editProfileSchema";
import {
  formValuesToRequest,
  fullUserDataToFormValues,
} from "../lib/editProfileTransformers";
import { editFormTabs } from "./EditProfileFormTabs/editFormTabs";
import { useAppDispatch } from "@/app/store";
import { useUpdateProfileMutation, type Profile } from "@/entities/profile";
import { useUpdateUserMutation } from "@/entities/user";
import { Button } from "@/shared/ui/Button/Button";
import { baseApi } from "@/shared/api/baseApi";
import { showToast } from "@/shared/toaster/model/toastSlice";
import { isFetchBaseQueryError } from "@/shared/api";
import type { FullUserData } from "@/entities/user/model/types";

export type EditProfileFormData = z.infer<typeof editProfileFormSchema>;

interface EditProfileFormProps {
  fullUserData: FullUserData;
  profile: Profile;
}

export const EditProfileForm = ({
  fullUserData,
  profile,
}: EditProfileFormProps) => {
  const { hash = "#personal" } = useLocation();
  const [updateUser, { isLoading: isUserMutationLoading }] =
    useUpdateUserMutation();
  const [updateProfile, { isLoading: isProfileMutationLoading }] =
    useUpdateProfileMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isProfileUpdating = isUserMutationLoading || isProfileMutationLoading;

  const methods = useForm<EditProfileFormData>({
    defaultValues: fullUserDataToFormValues(fullUserData, profile),
    resolver: zodResolver(editProfileFormSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: EditProfileFormData) => {
    if (fullUserData && profile) {
      const { userRequestData, profileRequestData } = await formValuesToRequest(
        fullUserData,
        profile,
        data,
      );
      try {
        await Promise.all([
          updateUser(userRequestData).unwrap(),
          updateProfile(profileRequestData).unwrap(),
        ]);
        dispatch(baseApi.util.invalidateTags(["FullUserData"]));
        navigate("/profile");
        dispatch(
          showToast({
            type: "success",
            text: "Данные профиля успешно изменены!",
          }),
        );
      } catch (error) {
        if (isFetchBaseQueryError(error)) {
          dispatch(
            showToast({
              type: "error",
              text: "Упс! Не удалось изменить данные профиля.",
            }),
          );
        }
      }
    }
  };

  const ActiveTabComponent =
    editFormTabs.find((tab) => tab.hash === hash)?.component ||
    editFormTabs[0].component;
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <ActiveTabComponent />
        <div className={styles.formBottom}>
          <Button
            size="lg"
            type="submit"
            className={styles.submitBtn}
            loading={isProfileUpdating}
          >
            Сохранить
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
