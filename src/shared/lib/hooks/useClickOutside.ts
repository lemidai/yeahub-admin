import { useEffect } from "react";

export const useClickOutside = (
  refs: React.RefObject<HTMLElement | null>[],
  handler: () => void,
  enabled: boolean,
) => {
  useEffect(() => {
    if (!enabled) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;

      const isOutside = refs.every((ref) => !ref.current?.contains(target));

      if (isOutside) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [refs, handler, enabled]);
};
