import axios from "axios";

const api = axios.create({
  baseURL: "https://paynthra24.onrender.com/api",
  withCredentials: true,
});

export default api;
