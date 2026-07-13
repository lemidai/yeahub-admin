export const AUTH_PATHS_MAP = {
  login: "/auth/login",
  logout: "/auth/logout",
  signUp: "/auth/signUp",
  refresh: "/auth/refresh",
  sendResetPassword: "/auth/send-reset-password",
} as const;

export const AUTH_PATHS = [
  AUTH_PATHS_MAP.login,
  AUTH_PATHS_MAP.logout,
  AUTH_PATHS_MAP.signUp,
  AUTH_PATHS_MAP.refresh,
  AUTH_PATHS_MAP.sendResetPassword,
] as const;

export const TOKEN_KEY = "accessToken";

export const SESSION_SLICE_KEY = "session";
