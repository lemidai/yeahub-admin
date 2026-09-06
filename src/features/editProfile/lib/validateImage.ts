import { getImageDimensions } from "@shared/lib/image/getImageDimensions";

export const validateImage = async (file: File) => {
  if (file.size > 5 * 1024 * 1024) {
    throw new Error("Максимальный размер изображения не более 5 Мб");
  }
  const url = URL.createObjectURL(file);
  try {
    const { width, height } = await getImageDimensions(url);
    if (width > 2048 || height > 2048) {
      throw new Error("Максимальное разрешение для изображения: 2048x2048");
    }
  } finally {
    URL.revokeObjectURL(url);
  }
};
