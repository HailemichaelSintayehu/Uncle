"use client";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
 
interface AuthState {
  session?: string;
  user?:any;
}

const initialState: AuthState = {
  session: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSession: (state, { payload }: PayloadAction<string>) => {
      state.session = payload;
    },
    setUser: (state, { payload }: PayloadAction<string>) => {
      state.user = payload;
    },
    clearSession: (state) => {
        state.session = undefined;
        state.user = undefined
      },
  },
});

export const {
setSession,
setUser,
clearSession
} = authSlice.actions;

export default authSlice.reducer;
