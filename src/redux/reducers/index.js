import { configureStore } from "@reduxjs/toolkit";
import drugsReducer from "./drugsReducerToolkit";
import drugsMiddleware from "../middleware/drugsMiddleware";
const store = configureStore({
  reducer: {
    drugs: drugsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(drugsMiddleware),
});
export default store;
