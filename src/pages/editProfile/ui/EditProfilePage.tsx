import styles from "./EditProfilePage.module.scss";
import clsx from "clsx";
import { Link, useLocation } from "react-router";
import { EditProfileFormLazy } from "@/features/editProfile/ui/EditProfileForm.lazy";
import { Suspense } from "react";
import { EditProfileFormSkeleton } from "@/features/editProfile/ui/EditProfileForm.skeleton";
import { useFullUserData } from "@/entities/user/model/useFullUserData";
import { editFormTabs } from "@/features/editProfile/ui/EditProfileFormTabs/editFormTabs";
import { refreshPage } from "@/shared/lib/browser/refreshPage";
import { ErrorState } from "@/shared/ui/ErrorState";

export const EditProfilePage = () => {
  const { activeProfile, fullUserData, isLoading, isError } = useFullUserData();
  const location = useLocation();

  return (
    <div className={styles.page}>
      <h2 className={styles.head}>Редактирование профиля</h2>
      <div className={styles.navigation}>
        <ul className={styles.navList}>
          {editFormTabs.map((tab) => (
            <li
              key={tab.hash}
              className={clsx(
                styles.navOption,
                location.hash === tab.hash ? styles.activeOption : "",
              )}
            >
              <Link to={tab.hash}>{tab.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      {isError ? (
        <ErrorState
          message="Не удалось загрузить данные для редактирования профиля."
          action={{
            label: "Обновить страницу",
            onClick: refreshPage,
          }}
        />
      ) : isLoading || !activeProfile || !fullUserData ? (
        <EditProfileFormSkeleton />
      ) : (
        <Suspense fallback={<EditProfileFormSkeleton />}>
          <EditProfileFormLazy
            fullUserData={fullUserData}
            profile={activeProfile}
          />
        </Suspense>
      )}
    </div>
  );
};
