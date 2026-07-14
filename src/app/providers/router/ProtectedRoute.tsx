import { useSelector } from "react-redux";
import { selectAccessToken } from "@/entities/session/model/selectors";
import { Navigate, Outlet } from "react-router";
import { ROUTES } from "@/shared/config/routes";

export const ProtectedRoute = () => {
  const access = useSelector(selectAccessToken);
  if (!access) {
    return <Navigate to={ROUTES.login} replace />;
  }
  return <Outlet />;
};
