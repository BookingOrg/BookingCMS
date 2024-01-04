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
  rememberMe: true,
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
    },
    loginFailt: (state, action: PayloadAction<object>) => {
      console.log(state, action);
    },
  },
});
export const { initCMS, loginFailt, loginRequest, loginSuccess } =
  authentication.actions;
export const selectCount = (state: RootState) => state.authentication;
export default authentication.reducer;
