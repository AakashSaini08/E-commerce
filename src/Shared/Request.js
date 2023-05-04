import axios from "axios";
import { BASE_URL } from "Services/Api/Constants";

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
    console.log(error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  function (error) {
    if(error.response.status === 401){
      localStorage.clear();
      window.location.replace('./login')
    }
    return Promise.reject(error);
  }
);

export default Request;
