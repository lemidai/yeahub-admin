import styles from "./ProfilePage.module.scss";
import { Section } from "@/pages/profile/ui/Section/Section";
import { PersonalSection } from "@/pages/profile/ui/PersonalSection/PersonalSection";
import { AboutSection } from "@/pages/profile/ui/AboutSection/AboutSection";
import { SkillsSection } from "@/pages/profile/ui/SkillsSection/SkillsSection";
import { refreshPage } from "@/shared/lib/browser/refreshPage";
import { useProfilePageData } from "../model/useProfilePageData";
import { ProfilePageSkeleton } from "./skeleton/ProfilePageSkeleton";
import { ErrorState } from "@/shared/ui/ErrorState";

export const ProfilePage = () => {
  const { profilePageData, hasErrors, isLoading } = useProfilePageData();

  if (hasErrors) {
    return (
      <ErrorState
        message="Не удалось загрузить данные профиля."
        action={{
          label: "Обновить страницу",
          onClick: refreshPage,
        }}
      />
    );
  }

  if (isLoading || !profilePageData) {
    return <ProfilePageSkeleton />;
  }

  const { personal, about, skills } = profilePageData;

  return (
    <div className={styles.page}>
      <Section editLink="/profile/edit#personal">
        <PersonalSection {...personal} />
      </Section>
      <Section title="Обо мне" editLink="/profile/edit#about">
        <AboutSection {...about} />
      </Section>
      <Section title="Навыки" editLink="/profile/edit#skills">
        <SkillsSection {...skills} />
      </Section>
    </div>
  );
};
