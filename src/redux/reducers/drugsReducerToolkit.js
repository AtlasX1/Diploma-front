import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import api from "../api";

export const addDrugAsync = createAsyncThunk(
  "drugs/addDrug",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.createDrug(payload);
      return { data: payload, message: response.data };
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
export const getDrugsAsync = createAsyncThunk(
  "drugs/getAllDrugs",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.getDrugs();
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
const initialState = {
  drugs: [],
  loading: "idle",
  error: "",
};

const drugsReducer = createSlice({
  name: "drugs",
  initialState,
  extraReducers: {
    [addDrugAsync.pending.type]: (state) => {
      state.loading = "pending";
    },
    [addDrugAsync.fulfilled.type]: (state, action) => {
      state.drugs.push(action.payload.data);
      state.loading = "idle";
    },
    [addDrugAsync.rejected.type]: (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    },
    [getDrugsAsync.pending.type]: (state, action) => {
      state.loading = "pending";
    },
    [getDrugsAsync.fulfilled.type]: (state, action) => {
      console.log(action);
      state.loading = "idle";
      state.drugs = [...action.payload.drugs];
    },
    [getDrugsAsync.rejected.type]: (state, { payload }) => {
      state.loading = "idle";
      state.error = payload;
    },
  },
});

export default drugsReducer.reducer;
