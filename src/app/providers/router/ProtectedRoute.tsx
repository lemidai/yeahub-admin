import { Navigate, Outlet } from "react-router";
import { useAppSelector } from "@/app/store";
import { selectAccessToken } from "@/features/auth/model/selectors";

export const ProtectedRoute = () => {
  const access = useAppSelector(selectAccessToken);

  if (!access) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};
