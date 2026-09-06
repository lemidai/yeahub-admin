import styles from "./AboutFormTab.module.scss";
import { FormField } from "@/shared/ui/FormField/FormField";
import { useFormContext } from "react-hook-form";
import { aboutTabConfig } from "../editFormTabs.config";
import type { EditProfileFormData } from "../../EditProfileForm";

export const AboutFormTab = () => {
  const { control } = useFormContext<EditProfileFormData>();
  const { about } = aboutTabConfig.sections;
  const { fields: aboutFields } = about;
  return (
    <div>
      <div className={styles.section}>
        <div className={styles.sectionInfo}>
          <p className={styles.sectionTitle}>{about.title}</p>
          <p className={styles.sectionDescription}>{about.description}</p>
        </div>
        <div className={styles.controllers}>
          <FormField
            control={control}
            name={aboutFields.description.name}
            render={({ value, onChange }) => {
              return (
                <textarea
                  id={aboutFields.description.name}
                  className={styles.bio}
                  value={value}
                  onChange={onChange}
                />
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};
