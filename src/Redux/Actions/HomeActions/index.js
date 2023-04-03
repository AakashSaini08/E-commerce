import { ADD_TO_CART, GETDATA, SETDATA} from "./actionStates";

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

  export const addToCart = (data) => {
    // console.log("addToCart action called...");
    return {
      type: ADD_TO_CART,
      data,
    };
  };

  // export const setAddToCart = (data) => {
  //   // console.log("addToCart action called...");
  //   return {
  //     type: SET_ADD_TO_CART,
  //     data,
  //   };
  // };