import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { TOASTS_SLICE_KEY } from "./constants";
import type { Toast } from "./types";

export interface ToastState {
  toasts: Toast[];
}

const initialState: ToastState = {
  toasts: [],
};

export const toastsSlice = createSlice({
  name: TOASTS_SLICE_KEY,
  initialState,
  reducers: {
    showToast: (state, action: PayloadAction<Omit<Toast, "id">>) => {
      state.toasts.push({
        id: crypto.randomUUID(),
        ...action.payload,
      });

      if (state.toasts.length > 10) {
        state.toasts.shift();
      }
    },
    removeToast: (state, action: PayloadAction<string>) => {
      const index = state.toasts.findIndex((t) => t.id === action.payload);
      if (index !== -1) {
        state.toasts.splice(index, 1);
      }
    },
    clearToasts: (state) => {
      state.toasts = [];
    },
  },
});

export const { showToast, removeToast, clearToasts } = toastsSlice.actions;

export const toastsReducer = toastsSlice.reducer;
