import Axios from "axios";

const api = Axios.create({
  baseURL: "http://192.168.52.234:3002",
});

export default api;
