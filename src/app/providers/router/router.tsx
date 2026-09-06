import { createBrowserRouter } from "react-router";
import { ROUTES } from "@/shared/config/routes";
import { PublicRoute } from "./PublicRoute";
import { ProtectedRoute } from "./ProtectedRoute";
import { AuthLayout } from "@/app/layouts/AuthLayout/AuthLayout";
import { MainLayout } from "@/app/layouts/MainLayout/MainLayout";
import { ProfilePageLazy } from "@/pages/profile";
import { LoginPage } from "@/pages/login/ui/LoginPage";
import { NotFoundPage } from "@/pages/notFound";
import { MainPage } from "@/pages/main/ui/MainPage";
import { EditProfilePage } from "@/pages/editProfile/ui/EditProfilePage";

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: ROUTES.login,
            element: <LoginPage />,
          },
        ],
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            path: ROUTES.main,
            element: <MainPage />,
          },
          {
            path: ROUTES.profile,
            element: <ProfilePageLazy />,
          },
          {
            path: ROUTES.editProfile,
            element: <EditProfilePage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
