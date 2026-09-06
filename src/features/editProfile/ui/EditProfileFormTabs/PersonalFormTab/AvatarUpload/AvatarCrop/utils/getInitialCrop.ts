import { BASE_CROP_AREA_DIMENSIONS } from "../model/constants";
import type { CropWindow } from "../model/types";

export const getInitialCrop = (
  imageDisplayWidth: number,
  imageDisplayHeight: number,
): CropWindow => ({
  x: (imageDisplayWidth - BASE_CROP_AREA_DIMENSIONS) / 2,
  y: (imageDisplayHeight - BASE_CROP_AREA_DIMENSIONS) / 2,
  width: BASE_CROP_AREA_DIMENSIONS,
  height: BASE_CROP_AREA_DIMENSIONS,
});
