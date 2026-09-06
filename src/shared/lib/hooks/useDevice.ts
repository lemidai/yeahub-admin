import { BREAKPOINTS, useMediaQuery } from "./useMediaQuery";

export const useDevice = () => {
  const isMobile = useMediaQuery(BREAKPOINTS.mobile);
  const isTablet = useMediaQuery(BREAKPOINTS.tablet);
  const isDesktop = useMediaQuery(BREAKPOINTS.desktop);

  return {
    isMobile,
    isTablet,
    isDesktop,
    isMobileOrTablet: isMobile || isTablet,
  };
};
