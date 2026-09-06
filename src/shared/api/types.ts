export type ApiError = {
  type: "server" | "serialized" | "unknown";
  message: string;
};
