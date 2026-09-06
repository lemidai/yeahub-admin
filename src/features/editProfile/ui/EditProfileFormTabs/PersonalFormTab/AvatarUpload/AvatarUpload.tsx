import styles from "./AvatarUpload.module.scss";
import { useCallback, useEffect, useState } from "react";
import { AvatarCrop } from "./AvatarCrop/AvatarCrop";
import { AvatarDropZone } from "./AvatarDropZone/AvatarDropZone";
import { AvatarPreview } from "./AvatarPreview/AvatarPreview";
import { validateImage } from "@/features/editProfile/lib/validateImage";
import { BaseModal } from "@/shared/ui/Modal/BaseModal";
import type { EditProfileFormData } from "@/features/editProfile/ui/EditProfileForm";

type ImageUploadProps = {
  initialAvatar: string;
  selectedAvatar: File | undefined;
  onAvatarChange: (avatar: EditProfileFormData["avatar"]) => void;
  onRemove: (avatar: EditProfileFormData["avatar"]) => void;
};

export const AvatarUpload = ({
  initialAvatar,
  selectedAvatar,
  onAvatarChange,
  onRemove,
}: ImageUploadProps) => {
  const [preview, setPreview] = useState(initialAvatar);
  const [error, setError] = useState("");
  const [cropFile, setCropFile] = useState<File | null>(null);
  const [isCropOpen, setIsCropOpen] = useState(false);

  const processFile = useCallback(async (file: File) => {
    setError("");

    try {
      await validateImage(file);
      setCropFile(file);
      setIsCropOpen(true);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Произошла неизвестная ошибка");
      }
    }
  }, []);

  useEffect(() => {
    if (!selectedAvatar) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPreview(initialAvatar);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedAvatar);

    setPreview(objectUrl);

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [selectedAvatar, initialAvatar]);

  const handleRemoveBtnClick = useCallback(() => {
    if (selectedAvatar) {
      onRemove({
        serverAvatar: initialAvatar,
        selectedAvatar: undefined,
      });
      return;
    }
    onRemove({
      serverAvatar: "",
      selectedAvatar: undefined,
    });
  }, [initialAvatar, onRemove, selectedAvatar]);

  const onCloseCropModal = useCallback(() => {
    setCropFile(null);
    setIsCropOpen(false);
  }, []);

  const onImageCrop = useCallback(
    (file: File) => {
      setIsCropOpen(false);
      setCropFile(null);

      onAvatarChange({
        serverAvatar: initialAvatar,
        selectedAvatar: file,
      });
    },
    [initialAvatar, onAvatarChange],
  );

  return (
    <div className={styles.upload}>
      <AvatarPreview preview={preview} onRemove={handleRemoveBtnClick} />
      <AvatarDropZone onFileSelect={processFile} />
      {error && <span className={styles.error}>{error}</span>}
      {isCropOpen && cropFile && (
        <BaseModal onClose={() => setIsCropOpen(false)}>
          <AvatarCrop
            imageFile={cropFile}
            onClose={onCloseCropModal}
            onCrop={onImageCrop}
          />
        </BaseModal>
      )}
    </div>
  );
};
