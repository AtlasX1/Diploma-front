export const ADD_DRUG_REQUEST = "ADD_DRUG_REQUEST";
export const ADD_DRUG_SUCCESS = "ADD_DRUG_SUCCESS";
export const ADD_DRUG_ERROR = "ADD_DRUG_ERROR";

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
