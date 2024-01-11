import { put, takeLatest } from "redux-saga/effects";
import {
  loginFailt,
  loginRequest,
  loginSuccess,
  logOutCMS,
  changeRememberMe,
} from "../slice/authentication";
import { loginRequestApi } from "@api/index";
import { dataPostLoginType } from "../../utils/types";
import { PayloadAction } from "@reduxjs/toolkit";
import * as Effects from "redux-saga/effects";
const call: any = Effects.call;
function* loginRequestSaga(action: PayloadAction) {
  try {
    const data: PayloadAction<any> = yield call(
      loginRequestApi,
      action.payload
    );
    console.log(data, "dataaaa");
    yield put(loginSuccess(data));
    // yield put(loginSuccess({}));
  } catch (e) {
    console.log(e);

    yield put(loginFailt(e || "login failt"));
  }
}
function* logoutRequestSaga() {
  try {
    yield call(logOutCMS);
  } catch (e) {
    yield call(logOutCMS);
  }
}

function* changeRememberSaga() {
  yield call(changeRememberMe);
}
export default function* watchAuthentication() {
  yield takeLatest(loginRequest.toString(), loginRequestSaga);
  yield takeLatest(logOutCMS.toString(), logoutRequestSaga);
  yield takeLatest(changeRememberMe.toString(), changeRememberSaga);
}
