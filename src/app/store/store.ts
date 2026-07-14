import "./initAppStore";
import "./registerApiEndpoints";
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { rootReducer } from "./rootReducer";
import { baseApi } from "@/shared/api";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefalutMiddleware) =>
    getDefalutMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
