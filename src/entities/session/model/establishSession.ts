import { type AppDispatch } from "@/app/store/store";
import { type SessionData } from "./types";
import { setSession } from "./sessionSlice";
import { setSessionDataToLS } from "../lib/helpers";

export const establishSession = (dispatch: AppDispatch, session: SessionData) => {
  dispatch(setSession(session));
  setSessionDataToLS(session);
};
