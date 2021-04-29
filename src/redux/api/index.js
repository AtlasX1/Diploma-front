import axios from "axios";
import { BASE_API_URL } from "../../config/base";

const api = {
  testApi: async (data) => ({ api: BASE_API_URL, data }),
};

export default api;
