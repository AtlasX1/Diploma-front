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
    addDrugSuccess(state) {
      if (state.ok) {
        state.isLoading = false;
      }
    },
    addDrugError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { addDrugRequest } = drugsReducer.actions;

export default drugsReducer.reducer;
