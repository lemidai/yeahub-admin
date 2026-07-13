import { createSlice } from "@reduxjs/toolkit";
import { SESSION_SLICE_KEY } from "./constants";
import { type User } from "./types";
import { getSessionDataFromLS } from "../lib/helpers";

type SessionState = {
  accessToken: string | null;
  user: User | null;
};

const session = getSessionDataFromLS();

const initialState: SessionState = {
  accessToken: session?.access_token ?? null,
  user: session?.user ?? null,
};

const sessionSlice = createSlice({
  name: SESSION_SLICE_KEY,
  initialState,
  reducers: {
    setSession: (state, action) => {
      state.accessToken = action.payload.access_token;
      state.user = action.payload.user;
    },
    removeSession: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const sessionReducer = sessionSlice.reducer;
export const { setSession, removeSession } = sessionSlice.actions;
