import { takeLatest, put, all } from "redux-saga/effects";
import {
  GETOTP,
  GETPASSWORD,
  GETVERIFY,
  LOGIN,
  LOGOUT,
  setLogin,
  setLogout,
  setOtp,
  setPassword,
  setSignUp,
  setSignUpOtp,
  setVerify,
  SIGNUP,
  SIGNUPOTP,
} from "../Actions/Auth";
import { API } from "Shared/Constants";
import { axiosInstance } from "Shared/Request";

function* auth({ payload : { data, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.signin, data);
    yield put(setLogin(response?.data));
    if (success) {
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error);
    }
  }
}

function* otp({ payload: { data, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.resend_otp, data);
    console.log(response);
    yield put(setOtp(Object.values(response?.data)));
    if (success) {
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error);
    }
  }
}

function* verify({ payload: { data, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.verify, data);
    console.log(response);
    yield put(setVerify(Object.values(response?.data)));
    if (success) {
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error);
    }
  }
}

function* resetPassword({ payload: { data, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.forgot_password, data);
    console.log(response);
    yield put(setPassword(Object.values(response?.data)));
    if (success) {
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error);
    }
  }
}

function* signUp({ payload: { data, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.signup, data);
    console.log(response);
    yield put(setSignUp(Object.values(response?.data)));
    if (success) {
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error);
    }
  }
}

function* otpVerify({ payload: { data, success, fail } }) {
  try {
    const response = yield axiosInstance.post(API.verify, data);
    console.log(response);
    yield put(setSignUpOtp(Object.values(response?.data)));
    if (success) {
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error);
    }
  }
}

function* logoutCall({ payload: { success, fail } }) {
  console.log(success, "dfdf");
  try {
    const response = yield axiosInstance.post(API.logout);
    yield put(setLogout(response?.data));
    if (success) {
      success(response);
    }
  } catch (error) {
    if (fail) {
      fail(error);
    }
  }
}

function* Sagaa() {
  yield all([
    takeLatest(LOGIN, auth),
    takeLatest(GETOTP, otp),
    takeLatest(GETVERIFY, verify),
    takeLatest(GETPASSWORD, resetPassword),
    takeLatest(SIGNUP, signUp),
    takeLatest(SIGNUPOTP, otpVerify),
    takeLatest(LOGOUT, logoutCall),
  ]);
}
export default Sagaa;
