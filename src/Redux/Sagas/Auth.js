import { takeLatest, put, all } from "redux-saga/effects";

import { GETOTP, GETPASSWORD, GETVERIFY, LOGIN, setLogin, setOtp, setPassword, setSignUp, setSignUpOtp, setVerify, SIGNUP, SIGNUPOTP } from "../Actions/Auth";
// import { login, logout } from "Services/Api/Auth";
// import requestSaga from "Shared/RequestSaga";
import axios from "axios";
import { API } from "Shared/Constants";

function* auth({ payload: { data, success, fail } }) {
  // debugger;
  try {
    const response = yield axios.post(
        API.signin,
      // "https://9690-122-160-165-213.in.ngrok.io/signin/",
      data
    );
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
    const response = yield axios.post(
      API.resend_otp,
      // "https://9690-122-160-165-213.in.ngrok.io/resend_otp/",
      data
    );
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
    const response = yield axios.post(
      API.verify,
      // "https://9690-122-160-165-213.in.ngrok.io/verify/",
      data
    );
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
    const response = yield axios.post(
      API.forgot_password,
      // "https://9690-122-160-165-213.in.ngrok.io/forgot_password/",
      data
    );
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

function* signup({ payload: { data, success, fail } }) {
  try {
    const response = yield axios.post(
      API.signup,
      // "https://9690-122-160-165-213.in.ngrok.io/signup/",
      data
    );
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
    const response = yield axios.post(
      API.verify,
      // "https://9690-122-160-165-213.in.ngrok.io/verify/",
      data
    );
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

function* Sagaa() {
  // yield takeLatest();
  yield all([takeLatest(LOGIN, auth), takeLatest( GETOTP,otp), takeLatest( GETVERIFY,verify), takeLatest( GETPASSWORD,resetPassword), takeLatest( SIGNUP,signup), takeLatest( SIGNUPOTP,otpVerify)]);
}
export default Sagaa;


