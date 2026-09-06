import styles from "./AvatarDropZone.module.scss";
import { useCallback, useRef } from "react";

interface AvatarDropZoneProps {
  onFileSelect: (file: File) => void;
}

export const AvatarDropZone = ({ onFileSelect }: AvatarDropZoneProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    e.dataTransfer.dropEffect = "copy";
  }, []);

  const handleDrop = useCallback(
    async (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();

      const file = e.dataTransfer.files?.[0];

      if (!file) {
        return;
      }

      onFileSelect(file);
    },
    [onFileSelect],
  );

  const handleClick = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }, []);

  const handleFileInputChange = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];

      if (!file) {
        return;
      }

      onFileSelect(file);

      e.target.value = "";
    },
    [onFileSelect],
  );

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
      className={styles.dropzone}
    >
      <div className={styles.text}>
        <p>
          <span className={styles.clickText}>Кликните для изменения </span>
          или перетащите сюда фото
        </p>
        <p className={styles.formatHintText}>
          JPG,PNG,JPEG,AVIF (не более 5мб)
        </p>
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileInputChange}
        className={styles.input}
      />
    </div>
  );
};
