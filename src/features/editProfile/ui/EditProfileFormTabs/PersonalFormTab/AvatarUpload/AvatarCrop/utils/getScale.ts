import type { Dimensions } from "../model/types";

export function getScale(
  imageWidth: number,
  imageHeight: number,
  cropWindow: Dimensions,
) {
  return Math.min(
    cropWindow?.width / imageWidth,
    cropWindow?.height / imageHeight,
    1,
  );
}
