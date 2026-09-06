import styles from "./SkillsFormTab.module.scss";
import { useFormContext } from "react-hook-form";
import { skillsTabConfig } from "../editFormTabs.config";
import { SkillsFormTabSkeleton } from "./SkillsFormTab.skeleton";
import { useGetSkillsQuery } from "@/entities/skill";
import { FormField } from "@/shared/ui/FormField/FormField";
import { Select } from "@/shared/ui/Select/Select";
import { ErrorState } from "@/shared/ui/ErrorState";
import { refreshPage } from "@/shared/lib/browser/refreshPage";
import type { EditProfileFormData } from "../../EditProfileForm";

export const SkillsFormTab = () => {
  const { data, isLoading, isError } = useGetSkillsQuery({ limit: 100 });
  const skillsList = data?.data || [];
  const { control } = useFormContext<EditProfileFormData>();

  const { skills: skillsSection } = skillsTabConfig.sections;
  const { skills } = skillsSection.fields;

  return (
    <>
      {isError ? (
        <ErrorState
          message="Не удалось загрузить данные скиллов. Попробуйте обновить страницу или зайдите позже"
          action={{ label: "Обновить страницу", onClick: refreshPage }}
        />
      ) : isLoading ? (
        <SkillsFormTabSkeleton />
      ) : (
        <div className={styles.section}>
          <div className={styles.sectionInfo}>
            <p className={styles.sectionTitle}>{skillsSection.title}</p>
            <p className={styles.sectionDescription}>
              {skillsSection.description}
            </p>
          </div>
          <div className={styles.controllers}>
            <FormField
              control={control}
              label={skills.label}
              name={skills.name}
              render={({ value = [], onChange }) => {
                const selectedIds = new Set(value);

                const selectedSkills = skillsList.filter((skill) =>
                  selectedIds.has(skill.id),
                );

                const availableSkills = skillsList.filter(
                  (skill) => !selectedIds.has(skill.id),
                );
                return (
                  <div className={styles.field}>
                    <Select
                      id={skills.name}
                      placeholder={skills.placeholder}
                      onChange={(id) => onChange([...value, Number(id)])}
                      options={
                        availableSkills?.map((skill) => ({
                          value: skill.id,
                          label: skill.title,
                        })) || []
                      }
                    />
                    <div className={styles.selected}>
                      <p className={styles.selectedTitle}>
                        {skills.selectedTitle}
                      </p>
                      <div className={styles.selectedList}>
                        {selectedSkills.map((skill) => (
                          <div key={skill.id} className={styles.selectedItem}>
                            <span>{skill.title}</span>
                            <button
                              type="button"
                              onClick={() =>
                                onChange(
                                  value.filter((id: number) => id !== skill.id),
                                )
                              }
                              className={styles.removeButton}
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};
