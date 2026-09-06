import styles from "./CropWorkspace.module.scss";
import cropBg from "./assets/crop_background.png";
import { RESIZE_HANDLES } from "./model/constants";
import { getCornerHandlePosition } from "./utils/getCornerHandlePosition";
import type { CropWindow, Dimensions, ResizeDirection } from "./model/types";
import type { RefObject } from "react";

interface CropWorkspaceProps {
  ref: RefObject<HTMLDivElement | null>;
  url: string;
  imageDisplayDimensions: Dimensions;
  crop: CropWindow;
  onResizeStart: (
    e: React.PointerEvent<HTMLDivElement>,
    direction: ResizeDirection,
  ) => void;
  onDragStart: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerMove: (e: React.PointerEvent<HTMLDivElement>) => void;
  onPointerUp: () => void;
}

export const CropWorkspace = ({
  ref,
  url,
  imageDisplayDimensions,
  crop,
  onResizeStart,
  onDragStart,
  onPointerMove,
  onPointerUp,
}: CropWorkspaceProps) => {
  console.log(url);
  return (
    <div
      className={styles.crop}
      ref={ref}
      style={{
        backgroundImage: `url(${cropBg})`,
        backgroundSize: "contain",
      }}
    >
      <div
        className={styles.cropWorkspace}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        style={{
          width: imageDisplayDimensions.width,
          height: imageDisplayDimensions.height,
        }}
      >
        <div className={styles.imageContainer}>
          <img src={url} className={styles.image} />
        </div>

        <div
          className={styles.cropArea}
          onPointerDown={onDragStart}
          style={{
            width: crop.width,
            height: crop.height,
            transform: `translate(${crop.x}px, ${crop.y}px)`,
          }}
        />
        {RESIZE_HANDLES.map((direction: ResizeDirection) => {
          const position = getCornerHandlePosition(crop, direction);
          return (
            <div
              key={direction}
              className={styles.resizeHandler}
              style={{
                cursor: `${direction}-resize`,
                transform: `translate(${position.x}px, ${position.y}px)`,
              }}
              onPointerDown={(e) => onResizeStart(e, direction)}
            />
          );
        })}
      </div>
    </div>
  );
};
