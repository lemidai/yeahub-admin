import { MIN_CROP_AREA_DIMENSIONS } from "../model/constants";
import type { CropWindow, ResizeDirection } from "../model/types";

export function resizeCrop(
  start: CropWindow,
  direction: ResizeDirection,
  deltaX: number,
  deltaY: number,
): CropWindow {
  let size: number;

  switch (direction) {
    case "se": {
      const delta = (deltaX + deltaY) / 2;

      size = Math.max(MIN_CROP_AREA_DIMENSIONS, start.width + delta);

      return {
        x: start.x,
        y: start.y,
        width: size,
        height: size,
      };
    }

    case "nw": {
      const delta = (deltaX + deltaY) / 2;

      size = Math.max(MIN_CROP_AREA_DIMENSIONS, start.width - delta);

      return {
        x: start.x + (start.width - size),
        y: start.y + (start.height - size),
        width: size,
        height: size,
      };
    }

    case "sw": {
      const delta = (deltaX - deltaY) / 2;

      size = Math.max(MIN_CROP_AREA_DIMENSIONS, start.width - delta);

      return {
        x: start.x + (start.width - size),
        y: start.y,
        width: size,
        height: size,
      };
    }

    case "ne": {
      const delta = (deltaX - deltaY) / 2;

      size = Math.max(MIN_CROP_AREA_DIMENSIONS, start.width + delta);

      return {
        x: start.x,
        y: start.y + (start.height - size),
        width: size,
        height: size,
      };
    }
  }
}
