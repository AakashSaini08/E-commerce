import { GETDATA, SETDATA} from "./actionStates";

export const getData = (data) => {
    console.log("getData action called...");
    return {
      type: GETDATA,
      data,
    };
  };
  
  export const setData = (data) => {
    console.log('setdata action....')
    return {
      type: SETDATA,
      data,
    };
  };