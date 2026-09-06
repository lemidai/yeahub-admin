import styles from "./Section.module.scss";
import { Link } from "react-router";
import EditIcon from "@/shared/assets/icons/EditIcon.svg";

interface ProfileSectionProps {
  title?: string;
  children: React.ReactNode;
  editLink?: string;
}

export const Section = ({ title, children, editLink }: ProfileSectionProps) => {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {title && <h2 className={styles.title}>{title}</h2>}
        <div className={styles.content}>{children}</div>
      </div>
      {editLink && (
        <Link to={editLink}>
          <img src={EditIcon} alt="Редактировать" />
        </Link>
      )}
    </section>
  );
};
