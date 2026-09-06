import type { ToastState } from "./toastSlice";

interface StateWithToasts {
  toasts: ToastState;
}
export const selectToasts = (state: StateWithToasts) => state.toasts.toasts;
