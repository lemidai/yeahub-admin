import { SESSION_SLICE_KEY, TOKEN_KEY } from "./constants";
import type { StateWithSession } from "./selectors";

export function isStateWithSession(state: unknown): state is StateWithSession {
  return (
    state !== null &&
    typeof state === "object" &&
    SESSION_SLICE_KEY in state &&
    state.session !== null &&
    typeof state.session === "object" &&
    TOKEN_KEY in state.session
  );
}
