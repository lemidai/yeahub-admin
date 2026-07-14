import { createBrowserRouter } from "react-router";
import { ROUTES } from "@/shared/config/routes";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";
import { AdminPage } from "@/pages/AdminPage/AdminPage";
import { LoginPage } from "@/pages/LoginPage/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
    ],
  },
  {
    path: ROUTES.admin,
    element: <ProtectedRoute />,
    children: [
      {
        index: true,
        element: <AdminPage />,
      },
    ],
  },
]);
