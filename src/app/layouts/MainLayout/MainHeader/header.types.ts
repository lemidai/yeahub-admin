export type PopoverAction = "logout";

export type HeaderAction = "logout";

export type HeaderActions = Record<HeaderAction, () => void>;

export interface PopoverNavItem {
  id: string;
  path: string;
  title: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface PopoverButtons {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  action: HeaderAction;
}
