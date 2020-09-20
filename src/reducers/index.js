import { combineReducers } from "redux";
import repairReducer from "./repair";

const rootReducer = combineReducers({
  repair: repairReducer,
});

export default rootReducer;
