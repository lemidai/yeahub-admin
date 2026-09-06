import styles from "./AboutSection.module.scss";

interface AboutSectionProps {
  description?: string;
}

export const AboutSection = ({ description }: AboutSectionProps) => {
  return <p className={styles.description}>{description || "Нет описания"}</p>;
};
