import type { CropWindow } from "../model/types";

export function getCropCoordinates(crop: CropWindow, scale: number) {
  return {
    x: Math.round(crop.x / scale),
    y: Math.round(crop.y / scale),
    width: Math.round(crop.width / scale),
    height: Math.round(crop.height / scale),
  };
}
