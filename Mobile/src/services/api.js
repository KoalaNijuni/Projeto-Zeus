import Axios from "axios";

const api = Axios.create({
  baseURL: "http://192.168.57.234:3002",
});

export default api;
