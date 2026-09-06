import styles from "./AvatarCrop.module.scss";
import React, { useRef } from "react";
import { CropWorkspace } from "./CropWorkspace";
import { cropImage } from "./lib/cropImage";
import { useImage } from "./model/useImage";
import { useAvatarCrop } from "./model/useAvatarCrop";
import { useElementDimensions } from "./model/useElementDimensions";
import { Button } from "@/shared/ui/Button/Button";

interface CropImageModalProps {
  imageFile: File;
  onClose: () => void;
  onCrop: (croppedFile: File) => void;
}

export const AvatarCrop: React.FC<CropImageModalProps> = ({
  imageFile,
  onClose,
  onCrop,
}) => {
  const { url, imageDimensions } = useImage(imageFile);
  const cropWindowRef = useRef<HTMLDivElement>(null);
  const cropContainerDimensions = useElementDimensions(cropWindowRef);
  const {
    crop,
    scale,
    imageDisplayDimensions,
    onDragStart,
    onResizeStart,
    onPointerMove,
    onPointerUp,
  } = useAvatarCrop({ imageDimensions, cropContainerDimensions });

  const handleCrop = async () => {
    if (!url || !imageDimensions.width || !imageDimensions.height) {
      return;
    }

    const croppedFile = await cropImage(url, imageFile, crop, scale);
    onCrop(croppedFile);
  };
  return (
    <div className={styles.cropContainer}>
      <div className={styles.modalContentWrapper}>
        <p className={styles.description}>
          Выберите область для фотографий профиля
        </p>
        <p className={styles.hint}>
          Выбранная миниатюра будет использоваться в статьях, личных сообщениях
          и комментариях.
        </p>
        <CropWorkspace
          ref={cropWindowRef}
          url={url}
          imageDisplayDimensions={imageDisplayDimensions}
          crop={crop}
          onDragStart={onDragStart}
          onResizeStart={onResizeStart}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
        />
      </div>
      <div className={styles.controls}>
        <Button type="button" className={styles.button} onClick={handleCrop}>
          Сохранить изменения
        </Button>
        <Button variant="secondary" onClick={onClose} className={styles.button}>
          Отмена
        </Button>
      </div>
    </div>
  );
};
