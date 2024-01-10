import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { authenticationType } from "../../utils/types";
import { RootState } from "..";

const initialState: authenticationType = {
  accessToken: {
    token: "",
    expires: "",
  },
  refreshToken: {
    token: "",
    expires: "",
  },
  loginInfo: null,
  rememberMe: false,
  loading: false,
  isLoggedIn: true,
};
export const authentication = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    initCMS: () => {},
    loginRequest: () => {},
    loginSuccess: (state, action: PayloadAction<object>) => {
      console.log(state, action);
      state.isLoggedIn = true;
    },
    loginFailt: (state, action: PayloadAction<object>) => {
      console.log(state, action);
    },
    logOutCMS: (state) => {
      console.log("slice");
      state.isLoggedIn = false;
    },
    changeInforTest: (state) => {
      state.loginInfo = { name: "Nguyen DInh ANh", age: 23 };
    },
    changeRememberMe: (state) => {
      state.rememberMe = !state.rememberMe;
    },
  },
});
export const {
  initCMS,
  loginFailt,
  loginRequest,
  loginSuccess,
  logOutCMS,
  changeRememberMe,
  changeInforTest,
} = authentication.actions;
export const selectCount = (state: RootState) => state.authentication;
export default authentication.reducer;
