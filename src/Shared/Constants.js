export const STRINGS = {
  SOMETHING_WENT_WRONG: "Sorry, something went wrong.",
  OFFLINE_MESSAGE:
    "You appear to be offline. Please check your internet connection.",
};

export const BASE_URL = "https://18c4-122-160-165-213.ngrok-free.app/";

export const API = {
  signin: `${BASE_URL}signin/`,
  signup: `${BASE_URL}signup/`,
  resend_otp: `${BASE_URL}resend_otp/`,
  verify: `${BASE_URL}verify/`,
  forgot_password: `${BASE_URL}forgot_password/`,
  getProduct: `${BASE_URL}getproduct/`,
  cart: `${BASE_URL}cart/`,
  logout: `${BASE_URL}logout/`,
  create_checkout:`${BASE_URL}create_checkout/`,
  recentlyviewed:`${BASE_URL}recentlyviewed/`,
  success:`${BASE_URL}success/`,
  productreview:`${BASE_URL}productreview/`,
  orderhistory:`${BASE_URL}orderhistory/`,
  transactionhistory:`${BASE_URL}transactionhistory/`
};
