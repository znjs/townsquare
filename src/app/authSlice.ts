import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loggedIn: false,
  userData: {},
};

const authSlice = createSlice({
  name: "auth",
  reducers: {},
  initialState,
});

export const authReducer = authSlice.reducer;
