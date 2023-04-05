import axios from "axios";
// import { useSelector } from "react-redux";
import { BASE_URL } from "./Constants";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// const userToken=useSelector((state)=>state?.auth?.data);

axiosInstance.interceptors.request.use(
  (config) => {
    // debugger;
    const object = JSON.parse(localStorage.getItem("persist:rootdata"));
    // console.log("token",object)
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

// axiosInstance.interceptors.response.use(
//     function(responce){
//         return responce;
//     },
//     function (error){
//         return Promise.reject(error);
//     }
// )

export default Request;
