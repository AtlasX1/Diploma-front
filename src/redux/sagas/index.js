import { all } from "redux-saga/effects";
import testSaga from "./testSaga";
function* saga() {
  yield all([testSaga()]);
}

export default saga;
