import { initBaseApi } from "@/shared/api/baseApi";
import { createBaseQuery } from "@/shared/api/baseQuery"; //не выполняется
import { withReauth } from "./reauth";
import { selectAccessToken } from "../model/selectors";
import { isStateWithSession } from "../model/guards";

export function initSessionTransport(): void {
  const baseQuery = createBaseQuery({
    getAccessToken: (state) => {
      if (isStateWithSession(state)) {
        return selectAccessToken(state);
      }
      return null;
    },
  });

  initBaseApi(withReauth(baseQuery));
}
