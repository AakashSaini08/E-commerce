import {
  ADDREVIEW,
  ADD_TO_CART,
  GETALLREVIEWS,
  GETCART,
  GETDATA,
  GETORDERHISTORY,
  GETVIEWEDITEMS,
  PAY,
  REMOVE_FROM_CART,
  SETALLREVIEWS,
  SETCART,
  SETDATA,
  SETORDERHISTORY,
  SETPAY,
  SETREVIEW,
  SETSUCCESS,
  SETVIEWED,
  SETVIEWEDITEMS,
  SET_ADD_TO_CART,
  SET_REMOVE_FROM_CART,
  SUCCESS,
  VIEWED,
} from "./actionStates";

export const getData = (data) => {
  return {
    type: GETDATA,
    data,
  };
};

export const setData = (data) => {
  return {
    type: SETDATA,
    data,
  };
};

export const success = (data) => {
  return {
    type: SUCCESS,
    data,
  };
};

export const setSuccess = (data) => {
  return {
    type: SETSUCCESS,
    data,
  };
};

export const getViewedItems = (data) => {
  return {
    type: GETVIEWEDITEMS,
    data,
  };
};

export const setViewedItems = (data) => {
  return {
    type: SETVIEWEDITEMS,
    data,
  };
};

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};

export const setAddToCart = (payload) => {
  return {
    type: SET_ADD_TO_CART,
    payload,
  };
};

export const addReview = (payload) => {
  return {
    type: ADDREVIEW,
    payload,
  };
};

export const setReview = (payload) => {
  return {
    type: SETREVIEW,
    payload,
  };
};



export const viewed = (payload) => {
  return {
    type: VIEWED,
    payload,
  };
};

export const setViewed = (payload) => {
  return {
    type: SETVIEWED,
    payload,
  };
};

export const getCart = (data) => {
  return {
    type: GETCART,
    data,
  };
};

export const setCart = (data) => {
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

export const getAllReviews = (payload) => {
  return {
    type: GETALLREVIEWS,
    payload,
  };
};

export const setAllReviews= (payload) => {
  console.log(payload,'jjjj');
  return {
    type: SETALLREVIEWS,
    payload,
  };
};

export const getOrderHistory = (data) => {
  return {
    type: GETORDERHISTORY,
    data,
  };
};

export const setOrderHistory = (data) => {
  return {
    type: SETORDERHISTORY,
    data,
  };
};