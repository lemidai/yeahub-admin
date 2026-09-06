export type ToastType = "success" | "error";

export interface Toast {
  id: string;
  type: ToastType;
  text: string;
}
