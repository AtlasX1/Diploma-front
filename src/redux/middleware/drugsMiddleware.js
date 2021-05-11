import api from "../api";

const create = (store) => (next) => (action) => {
  if (action.type === "drugs/addDrugRequest") {
    if (action?.payload) {
      api.createDrug(action.payload).then((res) => {
        if (res.data.message === "success") {
          store.dispatch({
            type: "drugs/addDrugSuccess",
            payload: res.data.message,
          });
        }
      });
    }
  }
  if (action.type === "drugs/getAllDrugsRequest") {
    api.getDrugs(action.payload).then((res) => {
      if (res.data.message === "success") {
        store.dispatch({
          type: "drugs/getAllDrugsSuccess",
          payload: res.data.drugs,
        });
      }
    });
  }
  next(action);
};

export default create;
