import { put, takeLatest, call } from "redux-saga/effects";
import {
  ADD_DRUG_REQUEST,
  GET_ALL_DRUGS_REQUEST,
} from "../actions/drugsActions";
import {
  addDrugError,
  addDrugSuccess,
  getAllDrugsError,
  getAllDrugsSuccess,
} from "../actions/drugsActions";
import api from "../api/index.js";

function* createDrug(action) {
  try {
    // yield call(api.createDrug, action);
    yield put(addDrugSuccess());
  } catch (error) {
    yield addDrugError(error);
  }
}

function* getDrugs(action) {
  try {
    const data = yield call(api.getDrugs, action);
    console.log(data);
    yield put(getAllDrugsSuccess(data.data.drugs));
  } catch (error) {
    yield getAllDrugsError(error);
  }
}

function* drugSaga() {
  yield takeLatest(ADD_DRUG_REQUEST, createDrug);
  yield takeLatest(GET_ALL_DRUGS_REQUEST, getDrugs);
}

export default drugSaga;
