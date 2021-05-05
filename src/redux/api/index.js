import axios from "axios";
import { BASE_API_URL } from "../../config/base";

const api = {
  getDrugs: async () => {
    return axios.get(BASE_API_URL + "/api/drug/");
  },
  createDrug: async (data) => {
    return axios.post(
      BASE_API_URL + "/api/drug/create",
      { data: data.data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
};

export default api;
