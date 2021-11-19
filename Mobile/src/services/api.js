import Axios from "axios";

const api = Axios.create({
  baseURL: "https://172.18.9.111:3002",
});

export default api;
