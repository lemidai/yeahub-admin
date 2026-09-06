import { getAccessToken } from "@/shared/lib/browser/localStorage/accessToken";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  accessToken: string | null;
}

const initialState: AuthState = {
  accessToken: getAccessToken(),
};

export const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    setAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { setAccessToken, logout } = authSlice.actions;
