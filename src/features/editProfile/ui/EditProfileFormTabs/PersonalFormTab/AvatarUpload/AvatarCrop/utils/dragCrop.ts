import type { CropWindow, Dimensions } from "../model/types";

export function dragCrop(
  start: CropWindow,
  deltaX: number,
  deltaY: number,
  imageDisplayDimensions: Dimensions,
) {
  return {
    x: Math.max(
      0,
      Math.min(start.x + deltaX, imageDisplayDimensions.width - start.width),
    ),
    y: Math.max(
      0,
      Math.min(start.y + deltaY, imageDisplayDimensions.height - start.height),
    ),
    width: start.width,
    height: start.height,
  };
}
