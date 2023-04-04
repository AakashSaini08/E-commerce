import { ADD_TO_CART, GETCART, GETDATA, SETCART, SETDATA, SET_ADD_TO_CART} from "./actionStates";

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

  export const addToCart = (payload) => {
    // console.log("addToCart action called...");
    return {
      type: ADD_TO_CART,
      payload,
    };
  };

  export const setAddToCart = (payload) => {
    // console.log("addToCart action called...");
    return {
      type: SET_ADD_TO_CART,
      payload,
    };
  };

  export const getCart = (data) => {
    // console.log("getData action called...");
    return {
      type: GETCART,
      data,
    };
  };
  
  export const setCart = (data) => {
    // console.log(data)
    return {
      type: SETCART,
      data,
    };
  };