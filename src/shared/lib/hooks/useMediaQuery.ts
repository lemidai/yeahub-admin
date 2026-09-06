import { useSyncExternalStore } from "react";

export const BREAKPOINTS = {
  mobile: "(max-width: 768px)",
  tablet: "(min-width: 769px) and (max-width: 1024px)",
  desktop: "(min-width: 1025px)",
};

export const useMediaQuery = (query: string): boolean => {
  const getSnapshot = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  };

  const subscribe = (onStoreChange: () => void) => {
    if (typeof window === "undefined") return () => {};

    const mediaQuery = window.matchMedia(query);

    mediaQuery.addEventListener("change", onStoreChange);

    return () => {
      mediaQuery.removeEventListener("change", onStoreChange);
    };
  };

  return useSyncExternalStore(subscribe, getSnapshot);
};
