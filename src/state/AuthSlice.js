import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    user: {
      id: null,
      name: null,
      email: null,
    },
    isLoggedIn: false,
  },
  reducers: {
    login: (state, action) => {
      state.token = action.payload.token;
      state.user.id = action.payload.id;
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.token = null;
      state.user.id = null;
      state.user.name = null;
      state.user.email = null;
      state.isLoggedIn = false;
    },
    updateUser: (state, action) => {
      state.user.name = action.payload.name;
      state.user.password = action.payload.password;
    },
    refreshToken: (state, action) => {
      state.token = action.payload.token;
    },
  },
});

export const loginDetails = (state) => state.auth;
export const loginStatus = (state) => state.auth.isLoggedIn;
export const userDetails = (state) => state.auth.user;
export const { login, logout, refreshToken, updateUser } = authSlice.actions;
export default authSlice.reducer;
