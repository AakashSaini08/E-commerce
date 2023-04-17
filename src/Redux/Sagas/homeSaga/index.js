import axios from "axios";
import { takeLatest, put, all } from "redux-saga/effects";
import {
  setAddToCart,
  setAllReviews,
  setCart,
  setData,
  setOrderHistory,
  setPaynow,
  setRemoveFromCart,
  setReview,
  setTransactionHistory,
  setViewed,
  setViewedItems,
} from "Redux/Actions/HomeActions";
import { ADD_REVIEW, ADD_TO_CART, GET_ALL_REVIEWS, GET_CART, GET_DATA, GET_ORDER_HISTORY, GET_TRANSACTION_HISTORY, GET_VIEWED_ITEMS, PAY, REMOVE_FROM_CART, SUCCESS, VIEWED } from "Redux/Actions/HomeActions/actionStates";
import { API } from "Shared/Constants";
import { axiosInstance } from "Shared/Request";

function* products(payload) {
  try {
    const response = yield axios.get(API.getProduct);
    yield put(setData(Object.values(response?.data)));
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }
}

function* myCart({ payload: { data, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.cart, data);
    if (success) {
      yield put(setAddToCart(response?.data));
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error);
    }
  }
}

function* cartData(payload) {
  try {
    const response = yield axiosInstance.get(API.cart + "?page="+ payload?.data);
    yield put(setCart(response?.data));
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }
}

function* removeItem({ payload: { data, success, fail } }) {
  try {
    const response = yield axiosInstance.delete(API.cart + data + "/");
    if (success) {
      yield put(setRemoveFromCart(response?.data));
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error);
    }
  }
}

function* payHere({ payload: { data, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.create_checkout , data);
    if (success) {
      yield put(setPaynow(response?.data));
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error);
    }
  }
}

function* viewedItem({ payload: { data, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.recentlyviewed ,data);
    if (success) {
      yield put(setViewed(response?.data));
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error);
    }
  }
}

function* myViewedItem(payload) {
  try {
    const response = yield axiosInstance.get(API.recentlyviewed + "?page=" + 1);
    yield put(setViewedItems(response?.data));
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }
}

function* myReview({ payload: { data, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.productreview ,data);
    if (success) {
      yield put(setReview(response?.data));
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error);
    }
  }
}

function* mySuccess(payload) {
  try {
    const response = yield axiosInstance.get(API.success);
    yield put(setData(Object.values(response?.data)));
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }
}

function* allReviews(payload) {
  try {
    const response = yield axiosInstance.get(API.productreview + "?product_id=" + payload.payload);
    yield put(setAllReviews(response?.data));
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }
}

function* orderHistory(payload) {
  try {
    const response = yield axiosInstance.get(API.orderhistory + "?page="+ payload?.data);
    yield put(setOrderHistory(response?.data));
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }
}

function* transactionHistory(payload) {
  try {
    const response = yield axiosInstance.get(API.transactionhistory + "?page="+ payload?.data);
    yield put(setTransactionHistory(response?.data));
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }
}


function* Sagaa() {
  yield all([
    takeLatest(GET_DATA, products),
    takeLatest(ADD_TO_CART, myCart),
    takeLatest(GET_CART, cartData),
    takeLatest(REMOVE_FROM_CART, removeItem),
    takeLatest(PAY, payHere),
    takeLatest(VIEWED, viewedItem),
    takeLatest(GET_VIEWED_ITEMS, myViewedItem),
    takeLatest(ADD_REVIEW, myReview),
    takeLatest(SUCCESS,mySuccess),
    takeLatest(GET_ALL_REVIEWS,allReviews),
    takeLatest(GET_ORDER_HISTORY,orderHistory),   
    takeLatest(GET_TRANSACTION_HISTORY,transactionHistory),    

  ]);
}
export default Sagaa;
