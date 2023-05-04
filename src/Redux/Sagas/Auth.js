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
import { axiosInstance } from "Shared/Request";
import { hideLoader, showLoader } from "Redux/Actions/LoadingActions";
import { API } from "Services/Api/Constants";

function* auth({ payload : { data, success, fail } }) {
  try {
    yield put(showLoader())
    const response = yield axiosInstance.post(API.signin, data);
    yield put(hideLoader())
    yield put(setLogin(response?.data));
    if (success) {
      success(response);
    }
  } catch (error) {
    yield put(hideLoader())
    if (fail) {
      fail(error);
    }
  }
}

function* otp({ payload: { data, success, fail } }) {
  try {
    yield put(showLoader())
    const response = yield axiosInstance.post(API.resend_otp, data);
    yield put(hideLoader())
    yield put(setOtp(Object.values(response?.data)));
    if (success) {
      success(response);
    }
  } catch (error) {
    yield put(hideLoader())
    if (fail) {
      fail(error);
    }
  }
}

function* verify({ payload: { data, success, fail } }) {
  try {
    yield put(showLoader())
    const response = yield axiosInstance.post(API.verify, data);
    yield put(hideLoader())
    yield put(setVerify(Object.values(response?.data)));
    if (success) {
      success(response);
    }
  } catch (error) {
    yield put(hideLoader())
    if (fail) {
      fail(error);
    }
  }
}

function* resetPassword({ payload: { data, success, fail } }) {
  try {
    yield put(showLoader())
    const response = yield axiosInstance.post(API.forgot_password, data);
    yield put(hideLoader())
    yield put(setPassword(Object.values(response?.data)));
    if (success) {
      success(response);
    }
  } catch (error) {
    yield put(hideLoader())
    if (fail) {
      fail(error);
    }
  }
}

function* signUp({ payload: { data, success, fail } }) {
  try {
    yield put(showLoader())
    const response = yield axiosInstance.post(API.signup, data);
    yield put(hideLoader())
    yield put(setSignUp(Object.values(response?.data)));
    if (success) {
      success(response);
    }
  } catch (error) {
    if (fail) {
      yield put(hideLoader())
      fail(error);
    }
  }
}

function* otpVerify({ payload: { data, success, fail } }) {
  try {
    yield put(showLoader())
    const response = yield axiosInstance.post(API.verify, data);
    yield put(hideLoader())
    yield put(setSignUpOtp(Object.values(response?.data)));
    if (success) {
      success(response);
    }
  } catch (error) {
    yield put(hideLoader())
    if (fail) {
      fail(error);
    }
  }
}

function* logoutCall({ payload: { success, fail } }) {
  try {
    yield put(showLoader())
    const response = yield axiosInstance.post(API.logout);
    yield put(hideLoader())
    yield put(setLogout(response?.data));
    if (success) {
      success(response);
    }
  } catch (error) {
    yield put(hideLoader())
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
