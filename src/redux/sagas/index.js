import { all } from "redux-saga/effects";
import testSaga from "./testSaga";
import drugSaga from "./drugSaga";
function* saga() {
  yield all([testSaga(), drugSaga()]);
}

export default saga;
