import { all } from "redux-saga/effects";
import watchAuthentication from "./authentication";
export default function* rootSaga() {
  yield all([
    watchAuthentication(),
    //   watchUsers(),
    //   watchShifts(),
    //   watchOrganizations(),
    //   watchPlaces(),
    //   watchExplains(),
    //   watchTimesheet(),
    //   watchNotification()
  ]);
}
