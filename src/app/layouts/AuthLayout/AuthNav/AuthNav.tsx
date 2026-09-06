import { AuthHeader } from "./AuthHeader/AuthHeader";
import { AuthSidebar } from "./AuthSidebar/AuthSidebar";
import { useDevice } from "@/shared/lib/hooks/useDevice";

export const AuthNav = () => {
  const { isMobile } = useDevice();
  return isMobile ? <AuthHeader /> : <AuthSidebar />;
};
