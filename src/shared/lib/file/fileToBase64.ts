export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result !== "string") {
        reject(new Error("Не удалось преобразовать файл"));
        return;
      }

      const base64 = reader.result.split(",")[1];

      if (!base64) {
        reject(new Error("Некорректный Base64"));
        return;
      }

      resolve(base64);
    };

    reader.onerror = () => {
      reject(reader.error);
    };

    reader.readAsDataURL(file);
  });
};
