import { useMemo, useRef } from "react";
import { useClickOutside } from "@shared/lib/hooks/useClickOutside";
import { useDisclosure } from "@shared/lib/hooks/useDisclosure";
import { useDevice } from "@shared/lib/hooks/useDevice";

export const useSidebar = () => {
  const { isMobileOrTablet } = useDevice();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const refs = useMemo(
    () => [triggerRef, sidebarRef],
    [triggerRef, sidebarRef],
  );

  const { close, open, toggle, isOpen } = useDisclosure();

  useClickOutside(refs, close, isOpen && isMobileOrTablet);

  return {
    isOpen,
    toggle,
    close,
    open,
    triggerRef,
    sidebarRef,
  };
};
