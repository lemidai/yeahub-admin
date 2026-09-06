import styles from "./AvatarPreview.module.scss";
import { useState } from "react";
import { Skeleton } from "@/shared/ui/Skeleton";
import DefaultAvatar from "@/shared/assets/icons/DefaultAvatar.svg?react";

interface AvatarPreviewProps {
  preview: string;
  onRemove: () => void;
}
export const AvatarPreview = ({ preview, onRemove }: AvatarPreviewProps) => {
  const [isPreviewLoading, setIsPreviewLoading] = useState(Boolean(preview));

  return preview ? (
    <div className={styles.preview}>
      {isPreviewLoading && <Skeleton className={styles.skeleton} />}
      <img
        src={preview}
        alt="Аватар"
        onLoad={() => setIsPreviewLoading(false)}
      />
      <button type="button" onClick={onRemove} className={styles.removeButton}>
        Удалить аватар
      </button>
    </div>
  ) : (
    <DefaultAvatar className={styles.defaultAvatar} />
  );
};
