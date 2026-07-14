import { useSelector } from "react-redux";
import { selectAccessToken } from "@/entities/session/model/selectors";
import { Navigate, Outlet } from "react-router";
import { ROUTES } from "@/shared/config/routes";

export const PublicRoute = () => {
  const access = useSelector(selectAccessToken);
  if (access) {
    return <Navigate to={ROUTES.admin} replace />;
  }
  return <Outlet />;
};
