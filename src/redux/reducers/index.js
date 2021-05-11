import { configureStore } from "@reduxjs/toolkit";
import drugsReducer from "./drugsReducerToolkit";
const store = configureStore({
  reducer: {
    drugs: drugsReducer,
  },
});
export default store;
