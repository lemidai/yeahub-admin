import { Navigate, Outlet } from "react-router";
import { ROUTES } from "@/shared/config/routes";
import { useAppSelector } from "@/app/store";
import { selectAccessToken } from "@/features/auth/model/selectors";

export const PublicRoute = () => {
  const access = useAppSelector(selectAccessToken);

  if (access) {
    return <Navigate to={ROUTES.profile} replace />;
  }
  return <Outlet />;
};
