import { ROUTES } from "@/shared/config/routes";
import MainIcon from "../assets/Main.svg?react";
import ProfileIcon from "../assets/Profile.svg?react";
import SupportIcon from "../assets/Support.svg?react";
import LogoutIcon from "../assets/Logout.svg?react";
import type { SidebarButton, SidebarNavItem } from "./sidebar.types";

export const SIDEBAR_NAV_ITEMS: SidebarNavItem[] = [
  {
    path: ROUTES.main,
    title: "Главная",
    icon: MainIcon,
  },
  {
    path: ROUTES.profile,
    title: "Профиль",
    icon: ProfileIcon,
    hideOn: ["desktop"],
  },
] as const;

export const SIDEBAR_BOTTOM_BUTTONS: SidebarButton[] = [
  {
    id: "support",
    title: "Поддержка",
    icon: SupportIcon,
    size: "lg",
    action: "support",
  },
  {
    id: "logout",
    title: "Выйти",
    icon: LogoutIcon,
    size: "lg",
    variant: "danger",
    action: "logout",
    hideOn: ["desktop"],
  },
] as const;
