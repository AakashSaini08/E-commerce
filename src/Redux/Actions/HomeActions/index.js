import {
  ADD_TO_CART,
  GETCART,
  GETDATA,
  PAY,
  REMOVE_FROM_CART,
  SETCART,
  SETDATA,
  SETPAY,
  SET_ADD_TO_CART,
  SET_REMOVE_FROM_CART,
  // STRIPE,
} from "./actionStates";

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

export const removeFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};

export const setRemoveFromCart = (payload) => {
  return {
    type: SET_REMOVE_FROM_CART,
    payload,
  };
};

export const paynow = (payload) => {
  return {
    type: PAY,
    payload,
  };
};

export const setPaynow = (payload) => {
  return {
    type: SETPAY,
    payload,
  };
};

// export const stripe = (payload) => {
//   return {
//     type: STRIPE,
//     payload,
//   };
// };
