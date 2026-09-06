import { useEffect, useRef, useState } from "react";
import type {
  Interaction,
  CropWindow,
  ResizeDirection,
  Dimensions,
} from "./types";
import { getInitialCrop } from "../utils/getInitialCrop";
import { getScale } from "../utils/getScale";
import { dragCrop } from "../utils/dragCrop";
import { resizeCrop } from "../utils/resizeCrop";

interface UseAvatarCropProps {
  imageDimensions: Dimensions;
  cropContainerDimensions: Dimensions | null;
}

export const useAvatarCrop = ({
  imageDimensions,
  cropContainerDimensions,
}: UseAvatarCropProps) => {
  const interaction = useRef<Interaction>({ type: "idle" });
  const scale = cropContainerDimensions
    ? getScale(
        imageDimensions.width,
        imageDimensions.height,
        cropContainerDimensions,
      )
    : 1;
  const imageDisplayDimensions = {
    width: imageDimensions.width * scale,
    height: imageDimensions.height * scale,
  };
  const [crop, setCrop] = useState<CropWindow>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!cropContainerDimensions) {
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCrop(
      getInitialCrop(
        imageDisplayDimensions.width,
        imageDisplayDimensions.height,
      ),
    );
  }, [
    cropContainerDimensions,
    imageDisplayDimensions.width,
    imageDisplayDimensions.height,
  ]);

  const handleDragDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    interaction.current = {
      type: "drag",
      pointerStart: { x: e.clientX, y: e.clientY },
      cropStart: crop,
    };
  };

  const handleDragMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (interaction.current.type !== "drag") return;

    const deltaX = e.clientX - interaction.current.pointerStart.x;
    const deltaY = e.clientY - interaction.current.pointerStart.y;

    const start = interaction.current.cropStart;
    setCrop(dragCrop(start, deltaX, deltaY, imageDisplayDimensions));
  };

  const handleDragUp = () => {
    interaction.current = { type: "idle" };
  };

  const handleResizeDown = (
    e: React.PointerEvent<HTMLDivElement>,
    direction: ResizeDirection,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    interaction.current = {
      type: "resize",
      cropStart: crop,
      direction: direction,
      pointerStart: { x: e.clientX, y: e.clientY },
    };
  };

  const handleResizeMove = (e: React.PointerEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (interaction.current.type !== "resize") return;

    const deltaX = e.clientX - interaction.current.pointerStart.x;
    const deltaY = e.clientY - interaction.current.pointerStart.y;
    const direction = interaction.current.direction;
    const start = interaction.current.cropStart;

    setCrop(resizeCrop(start, direction, deltaX, deltaY));
  };

  const handleResizeUp = () => {
    interaction.current = { type: "idle" };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    switch (interaction.current.type) {
      case "drag":
        handleDragMove(e);
        break;

      case "resize":
        handleResizeMove(e);
        break;

      case "idle":
        break;
    }
  };

  const handlePointerUp = () => {
    switch (interaction.current.type) {
      case "drag":
        handleDragUp();
        break;

      case "resize":
        handleResizeUp();
        break;

      case "idle":
        break;
    }
  };

  return {
    crop,
    scale,
    imageDisplayDimensions,
    onDragStart: handleDragDown,
    onResizeStart: handleResizeDown,
    onPointerMove: handlePointerMove,
    onPointerUp: handlePointerUp,
  };
};
