import { put, takeLatest, call } from "redux-saga/effects";
import {
  loginFailt,
  loginRequest,
  loginSuccess,
  logOutCMS,
  changeRememberMe,
} from "../slice/authentication";
import { loginRequestApi } from "../../api/authentication";
import { dataPostLoginType } from "../../utils/types";
import { PayloadAction } from "@reduxjs/toolkit";
function* loginRequestSaga(action: PayloadAction) {
  try {
    // const data: PayloadAction<dataPostLoginType> = yield call(
    //   loginRequestApi,
    //   action.payload
    // );
    // console.log(data, "dataaaa");
    // yield put(loginSuccess(data));
    yield put(loginSuccess({}));
  } catch (e) {
    yield put(loginFailt(e || "Login failt"));
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
