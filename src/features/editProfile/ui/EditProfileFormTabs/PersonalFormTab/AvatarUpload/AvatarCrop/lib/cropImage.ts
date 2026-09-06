import type { CropWindow } from "../model/types";
import { getCropCoordinates } from "../utils/getCropCoordinates";

export async function cropImage(
  imgUrl: string,
  imageFile: File,
  crop: CropWindow,
  scale: number,
): Promise<File> {
  const image = await new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();

    image.onload = () => resolve(image);
    image.onerror = reject;

    image.src = imgUrl;
  });

  const cropCoordinates = getCropCoordinates(crop, scale);

  const canvas = document.createElement("canvas");

  canvas.width = cropCoordinates.width;
  canvas.height = cropCoordinates.height;

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    throw new Error("Не удалось получить canvas context");
  }

  ctx.drawImage(
    image,
    cropCoordinates.x,
    cropCoordinates.y,
    cropCoordinates.width,
    cropCoordinates.height,
    0,
    0,
    cropCoordinates.width,
    cropCoordinates.height,
  );

  const blob = await new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error("Не удалось создать blob"));
          return;
        }

        resolve(blob);
      },
      imageFile.type,
      0.9,
    );
  });

  return new File([blob], imageFile.name, {
    type: blob.type,
    lastModified: Date.now(),
  });
}
