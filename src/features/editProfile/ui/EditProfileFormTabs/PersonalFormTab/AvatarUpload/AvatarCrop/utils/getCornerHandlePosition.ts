import type { CropWindow, ResizeDirection } from "../model/types";

export const getCornerHandlePosition = (
  crop: CropWindow,
  direction: ResizeDirection,
) => {
  switch (direction) {
    case "nw":
      return {
        x: crop.x - 5,
        y: crop.y - 5,
      };

    case "ne":
      return {
        x: crop.x + crop.width - 5,
        y: crop.y - 5,
      };

    case "sw":
      return {
        x: crop.x - 5,
        y: crop.y + crop.height - 5,
      };

    case "se":
      return {
        x: crop.x + crop.width - 5,
        y: crop.y + crop.height - 5,
      };
  }
};
