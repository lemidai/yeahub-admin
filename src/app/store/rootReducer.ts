import { sessionReducer } from "@/entities/session";
import { baseApi } from "@/shared/api/baseApi";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  api: baseApi.reducer,
  session: sessionReducer,
});
