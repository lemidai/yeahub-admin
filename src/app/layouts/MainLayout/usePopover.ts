import { useMemo, useRef } from "react";
import { useClickOutside } from "@shared/lib/hooks/useClickOutside";
import { useDisclosure } from "@shared/lib/hooks/useDisclosure";

export const usePopover = () => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const refs = useMemo(
    () => [triggerRef, popoverRef],
    [triggerRef, popoverRef],
  );

  const { close, open, toggle, isOpen } = useDisclosure();

  useClickOutside(refs, close, isOpen);

  return {
    isOpen,
    toggle,
    close,
    open,
    triggerRef,
    popoverRef,
  };
};
