import { GETDATA, GETUSER, SETDATA, SETUSER} from "./actionStates";

export const getData = (data) => {
    // console.log("getData action called...");
    return {
      type: GETDATA,
      data,
    };
  };
  
  export const setData = (data) => {
    // console.log('setdata action....')
    return {
      type: SETDATA,
      data,
    };
  };

  export const getUser = (payload,callback) => {
    // console.log('setdata action....')
    return {
      type: GETUSER,
      payload,
      callback
    };
  };
  export const setUser = (data) => {
    // console.log('setdata action....')
    return {
      type: SETUSER,
      data,
    };
  };