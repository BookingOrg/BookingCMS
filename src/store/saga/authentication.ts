import { put, takeLatest, call } from "redux-saga/effects";
import {
  loginFailt,
  loginRequest,
  loginSuccess,
} from "../slice/authentication";
import { loginRequestApi } from "../../api/authentication";
import { dataPostLoginType } from "../../utils/types";
import { PayloadAction } from "@reduxjs/toolkit";
function* loginRequestSaga(action: dataPostLoginType) {
  try {
    console.log(action);
    const data: PayloadAction<dataPostLoginType> = yield call(
      loginRequestApi,
      action.payload
    );
    yield put(loginSuccess(data));
  } catch (e) {
    yield put(loginFailt(e || "Login failt"));
  }
}
export default function* watchAuthentication() {
  yield takeLatest(loginRequest?.type, loginRequestSaga);
}
