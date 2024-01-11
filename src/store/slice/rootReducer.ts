import { combineReducers } from "redux";
import { default as authentication } from "./authentication";
const rootReducer = combineReducers({
  authentication,
});

export default rootReducer;
