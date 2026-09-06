export type Point = {
  x: number;
  y: number;
};

export type CropWindow = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type ResizeDirection = "se" | "nw" | "sw" | "ne";

export type Dimensions = {
  width: number;
  height: number;
};

export type Interaction =
  | { type: "idle" }
  | {
      type: "drag";
      pointerStart: Point;
      cropStart: CropWindow;
    }
  | {
      type: "resize";
      pointerStart: Point;
      cropStart: CropWindow;
      direction: ResizeDirection;
    };
