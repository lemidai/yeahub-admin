import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "@/features/auth/model/authSlice";
import { baseApi } from "@/shared/api/baseApi";
import { toastsReducer } from "@/shared/toaster/model/toastSlice";

export const rootReducer = combineReducers({
  api: baseApi.reducer,
  auth: authReducer,
  toasts: toastsReducer,
});
