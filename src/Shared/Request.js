import axios from "axios";
// import { useSelector } from "react-redux";
import { BASE_URL } from "./Constants";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const object = JSON.parse(localStorage.getItem("persist:rootdata"));
    const obj = JSON.parse(object.auth);
    const token = obj.data;
    if (token) {
      config.headers.authorization = "token " + token;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default Request;
