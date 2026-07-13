import { SESSION_SLICE_KEY } from "./constants";
import { type User } from "./types";

type SessionRootState = {
  [SESSION_SLICE_KEY]: {
    accessToken: string | null;
    user: User | null;
  };
};

export type StateWithSession = SessionRootState;

export const selectAccessToken = (state: StateWithSession) => state[SESSION_SLICE_KEY].accessToken;

export const selectIsAuthenticated = (state: StateWithSession) => Boolean(state[SESSION_SLICE_KEY].accessToken);
