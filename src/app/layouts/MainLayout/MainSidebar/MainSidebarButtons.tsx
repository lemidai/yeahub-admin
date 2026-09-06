import styles from "./MainSidebar.module.scss";
import { Button } from "@/shared/ui/Button/Button";
import type { SidebarActions, SidebarButton } from "./sidebar.types";

interface MainSidebarButtonsProps {
  buttons: SidebarButton[];
  device: "mobile" | "desktop";
  isOpen: boolean;
  actions: SidebarActions;
}

export const MainSidebarButtons = ({
  buttons,
  device,
  isOpen,
  actions,
}: MainSidebarButtonsProps) => {
  return (
    <div className={styles.buttons}>
      {buttons.map((button) => {
        const Icon = button.icon;

        return (
          <Button
            key={button.id}
            size={button.size}
            variant={button.variant}
            className={styles.button}
            onClick={actions[button.action]}
          >
            <Icon className={styles.icon} />
            {device === "mobile" ? button.title : isOpen && button.title}
          </Button>
        );
      })}
    </div>
  );
};
