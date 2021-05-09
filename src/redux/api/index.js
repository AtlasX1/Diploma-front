import axios from "axios";
import { BASE_API_URL } from "../../config/base";

const api = {
  getDrugs: async () => {
    return axios.get(BASE_API_URL + "/api/substance/");
  },
  createDrug: async (data) => {
    console.log(data);
    return axios.post(
      BASE_API_URL + "/api/substance/create",
      { ...data },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  },
};

export default api;
