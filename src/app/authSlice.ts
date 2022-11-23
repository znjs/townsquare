import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  userData: {},
};

const authSlice = createSlice({
  name: "auth",
  reducers: {
    login: (state) => {
      state.loggedIn = true;
    },
    logout: (state) => {
      state.loggedIn = false;
    },
  },
  initialState,
});

export const authReducer = authSlice.reducer;
export const { login, logout } = authSlice.actions;
