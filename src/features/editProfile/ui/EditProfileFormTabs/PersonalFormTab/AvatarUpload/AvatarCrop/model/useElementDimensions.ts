import { useEffect, useState, type RefObject } from "react";
import type { Dimensions } from "./model/types";

export const useElementDimensions = (ref: RefObject<HTMLElement | null>) => {
  const [dimensions, setDimensions] = useState<Dimensions | null>(null);
  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const { width, height } = element.getBoundingClientRect();

    setDimensions({ width, height });
  }, [ref]);

  return dimensions;
};
