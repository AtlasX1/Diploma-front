import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  drugs: [],
  isLoading: false,
  error: "",
};

const drugsReducer = createSlice({
  name: "drugs",
  initialState,

  reducers: {
    addDrugRequest(state, action) {
      state.drugs.push(action.payload);
      state.isLoading = true;
    },
    addDrugSuccess(state, action) {
      state.isLoading = false;
    },
    addDrugError(state, action) {
      state.error = action.payload;
    },
    getAllDrugsRequest(state, action) {
      state.isLoading = true;
    },
    getAllDrugsSuccess(state, action) {
      console.log(action);
      state.drugs = [...action.payload];
      state.isLoading = false;
    },
  },
});

export const { addDrugRequest, getAllDrugsRequest } = drugsReducer.actions;

export default drugsReducer.reducer;
