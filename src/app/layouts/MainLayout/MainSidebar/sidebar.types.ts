import type { ButtonProps } from "@/shared/ui/Button/Button";

export type SidebarDevice = "mobile" | "desktop";

export type SidebarAction = "support" | "logout";

export type SidebarActions = Record<SidebarAction, () => void>;

export interface SidebarNavItem {
  path: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  hideOn?: SidebarDevice[];
}

export interface SidebarButton extends Pick<ButtonProps, "variant" | "size"> {
  id: string;
  path?: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  action: SidebarAction;
  hideOn?: SidebarDevice[];
}
