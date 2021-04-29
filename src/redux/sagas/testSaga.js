import { put, takeLatest, call } from "redux-saga/effects";
import { TEST_REQUEST } from "../actions/testActions";
import { testError, testSuccess } from "../actions/testActions";
import api from "../api/index.js";

function* getTestSaga(action) {
  try {
    const data = yield call(api.testApi, action);
    yield put(testSuccess(data));
  } catch (error) {
    yield testError(error);
  }
}

function* testSaga() {
  yield takeLatest(TEST_REQUEST, getTestSaga);
}

export default testSaga;
