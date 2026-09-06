import styles from "./MainLayout.module.scss";
import { Outlet } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import { MainSidebar } from "@/app/layouts/MainLayout/MainSidebar/MainSidebar";
import { MainHeader } from "@/app/layouts/MainLayout/MainHeader/MainHeader";
import { MainErrorFallback } from "@/app/layouts/MainLayout/MainErrorFallback/MainErrorFallback";
import { useSidebar } from "@/app/layouts/MainLayout/useSidebar";
import { useGetFullUserDataQuery } from "@/entities/user";
import { refreshPage } from "@/shared/lib/browser/refreshPage";
import { ErrorState } from "@/shared/ui/ErrorState";

export const MainLayout = () => {
  const { close, toggle, triggerRef, sidebarRef, isOpen } = useSidebar();
  const { isError } = useGetFullUserDataQuery();

  return (
    <div className={styles.layout}>
      <MainSidebar
        isOpen={isOpen}
        onToggle={toggle}
        onClose={close}
        sidebarRef={sidebarRef}
      />
      <MainHeader
        sidebarToggleHandler={toggle}
        sidebarTogglerRef={triggerRef}
      />
      <main className={styles.content}>
        {isError ? (
          <ErrorState
            message="Произошла ошибка при загрузке данных."
            action={{ label: "Обновить страницу", onClick: refreshPage }}
          />
        ) : (
          <ErrorBoundary FallbackComponent={MainErrorFallback}>
            <Outlet />
          </ErrorBoundary>
        )}
      </main>
    </div>
  );
};
