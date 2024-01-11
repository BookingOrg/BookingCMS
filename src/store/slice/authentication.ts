import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { authenticationType, dataPostLoginType } from "@utils/types";
import { RootState } from "..";
import PopupNotification from "@helpers/popup-notification";

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
    loginRequest: (state, action: PayloadAction<dataPostLoginType>) => {},
    loginSuccess: (state, action: PayloadAction<object>) => {
      // console.log(state, action);
      PopupNotification({ type: "success", message: "Login success" });
      state.isLoggedIn = true;
    },
    loginFailt: (_, action: PayloadAction<any>) => {
      const { message } = action.payload;
      PopupNotification({ type: "error", message: message });
    },
    logOutCMS: (state) => {
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
