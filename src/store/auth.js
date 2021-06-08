import { createSlice } from "@reduxjs/toolkit";

const initialStateAuth = {
  authenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialStateAuth,
  reducers: {
    login(state) {
      state.authenticated = true;
    },
    logout(state) {
      state.authenticated = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
