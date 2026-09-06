import { logout, setAccessToken } from "../model/authSlice";
import {
  clearAccessToken,
  saveAccessToken,
} from "@/shared/lib/browser/localStorage/accessToken";
import type { AppDispatch } from "@/app/store/store";

export const saveSession = (dispatch: AppDispatch, token: string) => {
  dispatch(setAccessToken(token));
  saveAccessToken(token);
};

export const clearSession = (dispatch: AppDispatch) => {
  dispatch(logout());
  clearAccessToken();
};
