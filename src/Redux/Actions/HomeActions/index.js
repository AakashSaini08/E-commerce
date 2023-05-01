import { ADD_REVIEW, ADD_TO_CART, GET_ALL_REVIEWS, GET_CART, GET_DATA, GET_ORDER_HISTORY, GET_TRANSACTION_HISTORY, GET_VIEWED_ITEMS, PAY, REMOVE_FROM_CART, SET_ADD_TO_CART, SET_ALL_REVIEWS, SET_CART, SET_DATA, SET_ORDER_HISTORY, SET_PAY, SET_REMOVE_FROM_CART, SET_REVIEW, SET_SUCCESS, SET_TRANSACTION_HISTORY, SET_VIEWED, SET_VIEWED_ITEMS, SUCCESS, VIEWED } from "./actionStates";

export const getData = (data) => {
  return {
    type: GET_DATA,
    data,
  };
};

export const setData = (data) => {
  return {
    type: SET_DATA,
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
    type: SET_SUCCESS,
    data,
  };
};

export const getViewedItems = (data) => {
  return {
    type: GET_VIEWED_ITEMS,
    data,
  };
};

export const setViewedItems = (data) => {
  return {
    type: SET_VIEWED_ITEMS,
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
    type: ADD_REVIEW,
    payload,
  };
};

export const setReview = (payload) => {
  return {
    type: SET_REVIEW,
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
    type: SET_VIEWED,
    payload,
  };
};

export const getCart = (data) => {
  return {
    type: GET_CART,
    data,
  };
};

export const setCart = (data) => {
  return {
    type: SET_CART,
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
    type: SET_PAY,
    payload,
  };
};

export const getAllReviews = (payload) => {
  return {
    type: GET_ALL_REVIEWS,
    payload,
  };
};

export const setAllReviews= (payload) => {
  return {
    type: SET_ALL_REVIEWS,
    payload,
  };
};

export const getOrderHistory = (data) => {
  return {
    type: GET_ORDER_HISTORY,
    data,
  };
};

export const setOrderHistory = (data) => {
  return {
    type: SET_ORDER_HISTORY,
    data,
  };
};

export const getTransactionHistory = (data) => {
  return {
    type: GET_TRANSACTION_HISTORY,
    data,
  };
};

export const setTransactionHistory = (data) => {
  return {
    type: SET_TRANSACTION_HISTORY,
    data,
  };
};
