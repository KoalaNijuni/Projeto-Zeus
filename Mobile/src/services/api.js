import Axios from "axios";

const api = Axios.create({
  baseURL: "http://192.168.214.234:3002",
});

export default api;
