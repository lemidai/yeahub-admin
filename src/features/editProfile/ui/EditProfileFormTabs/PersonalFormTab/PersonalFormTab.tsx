import styles from "./PersonalFormTab.module.scss";
import clsx from "clsx";
import { useFormContext } from "react-hook-form";
import { personalTabConfig } from "../editFormTabs.config";
import { AvatarUpload } from "./AvatarUpload/AvatarUpload";
import { useFullUserData } from "@/entities/user/model/useFullUserData";
import { socialNetworks } from "@/shared/config/socialNetworks";
import { useGetSpecializationsQuery } from "@/entities/specialization";
import { FormField } from "@/shared/ui/FormField/FormField";
import { Input } from "@/shared/ui/Input";
import { Select } from "@/shared/ui/Select/Select";
import type { EditProfileFormData } from "../../EditProfileForm";

export const PersonalFormTab = () => {
  const { data: specilizationsResponse } = useGetSpecializationsQuery();
  const { activeProfile } = useFullUserData();
  const hasSpecialization = Boolean(activeProfile?.specializationId);
  const specializations = specilizationsResponse?.data;
  const { control } = useFormContext<EditProfileFormData>();
  const { avatar, personal, social } = personalTabConfig.sections;
  const { fields: avatarFields } = avatar;
  const { fields: personalFields } = personal;

  return (
    <div className={styles.formTab}>
      <div className={styles.section}>
        <div className={styles.sectionInfo}>
          <p className={styles.sectionTitle}>{avatar.title}</p>
          <p className={styles.sectionDescription}>{avatar.description}</p>
        </div>
        <FormField
          control={control}
          name={avatarFields.avatar.name}
          render={({ value, onChange }) => {
            return (
              <AvatarUpload
                initialAvatar={value.serverAvatar}
                selectedAvatar={value.selectedAvatar}
                onAvatarChange={(avatarFieldData) => {
                  onChange(avatarFieldData);
                }}
                onRemove={(newValue) => {
                  onChange(newValue);
                }}
              />
            );
          }}
        />
      </div>
      <div className={styles.section}>
        <div className={styles.sectionInfo}>
          <p className={styles.sectionTitle}>{personal.title}</p>
          <p className={styles.sectionDescription}>{personal.description}</p>
        </div>
        <div className={clsx(styles.controllers, styles.columnList)}>
          <FormField
            control={control}
            label={personalFields.username.label}
            name={personalFields.username.name}
            render={({ value, onChange, error }) => (
              <Input
                id={personalFields.username.name}
                value={value}
                onChange={onChange}
                error={error}
              />
            )}
          />
          <FormField
            control={control}
            label={personalFields.specialization.label}
            name={personalFields.specialization.name}
            render={({ value, onChange }) => {
              return (
                <Select
                  id={personalFields.specialization.name}
                  options={
                    specializations?.map((spec) => ({
                      value: spec.id,
                      label: spec.title,
                    })) || []
                  }
                  value={
                    specializations?.find((spec) => spec.id === value)?.title
                  }
                  disabled={hasSpecialization}
                  placeholder={personalFields.specialization.placeholder}
                  onChange={(id) => onChange(Number(id))}
                  className={styles.selectSpecialization}
                />
              );
            }}
          />
          <FormField
            control={control}
            label={personalFields.email.label}
            name={personalFields.email.name}
            render={({ value, onChange, error }) => (
              <Input
                id={personalFields.email.name}
                value={value}
                onChange={onChange}
                error={error}
                disabled={true}
              />
            )}
          />
          <FormField
            control={control}
            label={personalFields.city.label}
            name={personalFields.city.name}
            render={({ value, onChange, error }) => (
              <Input
                id={personalFields.city.name}
                value={value ?? ""}
                onChange={onChange}
                error={error}
              />
            )}
          />
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.sectionInfo}>
          <p className={styles.sectionTitle}>{social.title}</p>
          <p className={styles.sectionDescription}>{social.description}</p>
        </div>
        <div className={clsx(styles.controllers, styles.rowList)}>
          {Object.entries(socialNetworks).map(([code, { title }], index) => (
            <FormField
              control={control}
              label={title}
              key={code}
              name={`socialNetwork.${index}`}
              render={({ value, onChange, error }) => (
                <Input
                  id={`socialNetwork.${index}`}
                  value={value?.title ?? ""}
                  onChange={(e) => onChange({ code, title: e.target.value })}
                  error={error}
                />
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
