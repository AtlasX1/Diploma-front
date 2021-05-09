import api from "../api";

const create = (store) => (next) => (action) => {
  if (action.type === "drugs/addDrugRequest") {
    if (action?.payload) {
      api.createDrug(action.payload).then((ok) => {
        if (ok) {
          store.dispatch({ type: "drugs/addDrugSuccess", payload: ok });
        }
      });
    }
  }
  next(action);
};

export default create;
