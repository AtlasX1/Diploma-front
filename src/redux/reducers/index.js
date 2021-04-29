import { combineReducers } from "redux";
import testReducer from "./testReducer";
import drugsReducer from "./drugsReducer";
const rootReducer = combineReducers({ testReducer, drugsReducer });
export default rootReducer;
