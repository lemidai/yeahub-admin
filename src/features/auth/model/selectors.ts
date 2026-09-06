import type { AuthState } from "./authSlice";
import { AUTH_SLICE_KEY } from "./constants";

type StateWithAuth = {
  [AUTH_SLICE_KEY]: AuthState;
};

export const selectAccessToken = (state: StateWithAuth) =>
  state[AUTH_SLICE_KEY].accessToken;

export const selectIsAuthenticated = (state: StateWithAuth) =>
  Boolean(state[AUTH_SLICE_KEY].accessToken);
