import type { PopoverButtons, PopoverNavItem } from "./header.types";
import Logout from "../assets/Logout.svg?react";

export const POPOVER_NAV_ITEMS: PopoverNavItem[] = [
  {
    id: "profile",
    title: "Мой профиль",
    path: "/profile",
  },
];

export const POPOVER_BUTTONS: PopoverButtons[] = [
  {
    id: "logout",
    title: "Выйти",
    action: "logout",
    icon: Logout,
  },
];
