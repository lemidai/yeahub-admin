export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginFormError = {
  type: "server" | "serialized" | "unknown";
  message: string;
};
