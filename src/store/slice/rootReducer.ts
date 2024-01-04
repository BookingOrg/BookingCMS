import { combineReducers } from "redux";
import { default as authentication } from "./authentication";
const rootReducer = combineReducers({
  authentication,
  // customization,
  // users,
  // shifts,
  // organizations,
  // places,
  // explain,
  // timesheet,
  // notification
});

export default rootReducer;
