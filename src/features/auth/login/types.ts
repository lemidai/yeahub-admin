import type { User } from "@/entities/user/model/types";

export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
  user: User;
};

export type LoginFormError = {
  type: "server" | "serialized" | "unknown";
  message: string;
};
