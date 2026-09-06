import styles from "./SkillsSection.module.scss";
import type { Skill } from "@/entities/skill";

interface SkillsSectionProps {
  skills: Skill[];
}

export const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <div className={styles.skills}>
      {skills.map((skill) => (
        <div key={skill.id} className={styles.skill}>
          <span>{skill.title}</span>
        </div>
      ))}
    </div>
  );
};
