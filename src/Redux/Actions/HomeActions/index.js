import {
  ADD_TO_CART,
  GETCART,
  GETDATA,
  GETVIEWEDITEMS,
  PAY,
  REMOVE_FROM_CART,
  SETCART,
  SETDATA,
  SETPAY,
  SETVIEWED,
  SETVIEWEDITEMS,
  SET_ADD_TO_CART,
  SET_REMOVE_FROM_CART,
  VIEWED,
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

export const getViewedItems = (data) => {
  // console.log("getData action called...");
  return {
    type: GETVIEWEDITEMS,
    data,
  };
};

export const setViewedItems = (data) => {
  // console.log(data,'setdata action....')
  return {
    type: SETVIEWEDITEMS,
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

export const viewed = (payload) => {
  // console.log("addToCart action called...");
  return {
    type: VIEWED,
    payload,
  };
};

export const setViewed = (payload) => {
  // console.log("addToCart action called...");
  return {
    type: SETVIEWED,
    payload,
  };
};

export const getCart = (data) => {
  console.log(data,"getcart");
  // console.log("getData action called...");
  return {
    type: GETCART,
    data,
  };
};

export const setCart = (data) => {
  // console.log(data ,"setcart")
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
