import axios from "axios";
import { takeLatest, put, all } from "redux-saga/effects";
import {
  setAddToCart,
  setCart,
  setData,
  setPaynow,
  setRemoveFromCart,
  setViewed,
  setViewedItems,
} from "Redux/Actions/HomeActions";
import {
  ADD_TO_CART,
  GETCART,
  GETDATA,
  GETVIEWEDITEMS,
  PAY,
  REMOVE_FROM_CART,
  VIEWED,
  // STRIPE,
} from "Redux/Actions/HomeActions/actionStates";
import { API } from "Shared/Constants";
import { axiosInstance } from "Shared/Request";

function* products(payload) {
  // console.log('saga...')
  try {
    const response = yield axios.get(API.getProduct);
    yield put(setData(Object.values(response?.data)));
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }
}
//axios.instance

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
  console.log(payload.data,"page number");
  // const currentPage = payload.data;
  // console.log(currentPage)

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
  // console.log(response);
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
  // console.log(response);
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
      console.log(response)
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

function* Sagaa() {
  // yield takeLatest(GETDATA,products);
  yield all([
    takeLatest(GETDATA, products),
    takeLatest(ADD_TO_CART, myCart),
    takeLatest(GETCART, cartData),
    takeLatest(REMOVE_FROM_CART, removeItem),
    takeLatest(PAY, payhere),
    takeLatest(VIEWED, viewedItem),
    takeLatest(GETVIEWEDITEMS, myViewedItem),



    // takeLatest(STRIPE, stripePay),

    
  ]);
}
export default Sagaa;
