export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
const API_VERSION = process.env.REACT_APP_API_VERSION;

export const API_URLS = {
  LOGIN: API_BASE_URL + API_VERSION + "",
};

export const STATUS_CODES = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
};

export const BASE_URL = "https://grumpy-paws-dig-112-196-113-2.loca.lt/";

export const API = {
  signin: `${BASE_URL}signin/`,
  signup: `${BASE_URL}signup/`,
  resend_otp: `${BASE_URL}resend_otp/`,
  verify: `${BASE_URL}verify/`,
  forgot_password: `${BASE_URL}forgot_password/`,
  getProduct: `${BASE_URL}getproduct/`,
  cart: `${BASE_URL}cart/`,
  logout: `${BASE_URL}logout/`,
  create_checkout: `${BASE_URL}create_checkout/`,
  recentlyviewed: `${BASE_URL}recentlyviewed/`,
  success: `${BASE_URL}success/`,
  productreview: `${BASE_URL}productreview/`,
  orderhistory: `${BASE_URL}orderhistory/`,
  transactionhistory: `${BASE_URL}transactionhistory/`,
};
