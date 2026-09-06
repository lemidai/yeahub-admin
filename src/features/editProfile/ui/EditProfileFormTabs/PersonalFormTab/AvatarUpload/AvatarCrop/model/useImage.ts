import { useEffect, useState } from "react";
import type { Dimensions } from "./types";

export const useImage = (file?: File) => {
  const [url, setUrl] = useState("");
  const [imageDimensions, setImageDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!file) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setUrl("");
      setImageDimensions({ width: 0, height: 0 });
      return;
    }

    const url = URL.createObjectURL(file);
    const image = new Image();

    image.src = url;

    image.onload = () => {
      setUrl(url);
      setImageDimensions({
        width: image.width,
        height: image.height,
      });
    };

    return () => {
      URL.revokeObjectURL(url);
    };
  }, [file]);

  return {
    url,
    imageDimensions,
  };
};
