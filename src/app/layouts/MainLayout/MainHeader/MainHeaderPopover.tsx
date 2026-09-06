import styles from "./MainHeader.module.scss";
import { Link } from "react-router";
import { POPOVER_BUTTONS, POPOVER_NAV_ITEMS } from "./header.config";
import DefaultAvatar from "@/shared/assets/icons/DefaultAvatar.svg";
import type { RefObject } from "react";
import type { HeaderActions } from "./header.types";

interface MainHeaderPopoverProps {
  popoverRef: RefObject<HTMLDivElement | null>;
  actions: HeaderActions;
  onClose: () => void;
  avatarUrl: string;
  username: string;
  email: string;
}

export const MainHeaderPopover = ({
  popoverRef,
  actions,
  avatarUrl,
  onClose,
  username,
  email,
}: MainHeaderPopoverProps) => {
  return (
    <div className={styles.popover} ref={popoverRef}>
      <div className={styles.user}>
        <img
          src={avatarUrl || DefaultAvatar}
          alt=""
          className={styles.userAvatar}
        />
        <div className={styles.userInfo}>
          <p>{username}</p>
          <p className={styles.userEmail}>{email}</p>
        </div>
      </div>
      <ul>
        {POPOVER_NAV_ITEMS.map((item) => (
          <li key={item.id} className={styles.option}>
            <Link onClick={onClose} to={item.path}>
              {item.title}
            </Link>
          </li>
        ))}
        {POPOVER_BUTTONS.map((button) => {
          const Icon = button.icon;

          return (
            <li key={button.id} className={styles.option}>
              <button onClick={actions[button.action]}>
                <Icon className={styles.optionIcon} />
                {button.title}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
