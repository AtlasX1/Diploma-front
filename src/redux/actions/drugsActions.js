export const ADD_DRUG_REQUEST = "ADD_DRUG_REQUEST";
export const ADD_DRUG_SUCCESS = "ADD_DRUG_SUCCESS";
export const ADD_DRUG_ERROR = "ADD_DRUG_ERROR";
export const GET_ALL_DRUGS_REQUEST = "GET_ALL_DRUGS_REQUEST";
export const GET_ALL_DRUGS_SUCCESS = "GET_ALL_DRUGS_SUCCESS";
export const GET_ALL_DRUGS_ERROR = "GET_ALL_DRUGS_ERROR";

export const addDrugRequest = (data) => ({
  type: ADD_DRUG_REQUEST,
  data,
});

export const addDrugSuccess = () => ({
  type: ADD_DRUG_SUCCESS,
});

export const addDrugError = (error) => ({
  type: ADD_DRUG_ERROR,
  error,
});

export const getAllDrugsRequest = () => ({
  type: GET_ALL_DRUGS_REQUEST,
});

export const getAllDrugsSuccess = (data) => ({
  type: GET_ALL_DRUGS_SUCCESS,
  data,
});

export const getAllDrugsError = (error) => ({
  type: GET_ALL_DRUGS_ERROR,
  error,
});
