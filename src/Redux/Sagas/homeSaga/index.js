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
  setViewed,
  setViewedItems,
} from "Redux/Actions/HomeActions";
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
  SUCCESS,
  VIEWED,

} from "Redux/Actions/HomeActions/actionStates";
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

function* payhere({ payload: { data, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.create_checkout , data);
    // console.log(response,"sdsd");
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
    console.log(response,"allReviews responce");
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


function* Sagaa() {
  yield all([
    takeLatest(GETDATA, products),
    takeLatest(ADD_TO_CART, myCart),
    takeLatest(GETCART, cartData),
    takeLatest(REMOVE_FROM_CART, removeItem),
    takeLatest(PAY, payhere),
    takeLatest(VIEWED, viewedItem),
    takeLatest(GETVIEWEDITEMS, myViewedItem),
    takeLatest(ADDREVIEW, myReview),
    takeLatest(SUCCESS,mySuccess),
    takeLatest(GETALLREVIEWS,allReviews),
    takeLatest(GETORDERHISTORY,orderHistory),    
  ]);
}
export default Sagaa;
