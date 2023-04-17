import {
  ADD_TO_CART,
  GET_ALL_REVIEWS,
  GET_CART,
  GET_DATA,
  GET_ORDER_HISTORY,
  GET_TRANSACTION_HISTORY,
  GET_VIEWED_ITEMS,
  PAY,
  SET_ADD_TO_CART,
  SET_ALL_REVIEWS,
  SET_CART,
  SET_DATA,
  SET_ORDER_HISTORY,
  SET_PAY,
  SET_TRANSACTION_HISTORY,
  SET_VIEWED_ITEMS,
} from "../../Actions/HomeActions/actionStates";

const initialData = {
  products: [],
  cartData: [],
  checkoutData: [],
  viewedData: [],
  payData: [],
  reviews: [],
  orderHistory: [],
  transactionHistory:[],
};

const homeReducer = (data = initialData, action) => {
  switch (action.type) {
    case GET_DATA:
      return data;
    case SET_DATA:
      return { ...data, products: action?.data?.map((data) => ({ ...data })) };

    case ADD_TO_CART:
      return data;

    case SET_ADD_TO_CART:
      return { ...data, cartData: action?.data?.map((data) => ({ ...data })) };

    case GET_CART:
      return data;

    case SET_CART:
      return {
        ...data,
        checkoutData: action?.data?.data?.map((data) => ({ ...data })),
        totalPrice: action?.data?.Total_price,
        totalItems: action?.data?.product_count,
      };

    case PAY:
      return data;

    case SET_PAY:
      return {
        ...data,
        payData: action?.payload?.sessionId,
      };

    case GET_VIEWED_ITEMS:
      return data;

    case SET_VIEWED_ITEMS:
      return {
        ...data,
        viewedData: action?.data?.data.map((data) => ({ ...data })),
      };

    case GET_ALL_REVIEWS:
      return data;

    case SET_ALL_REVIEWS:
      return {
        ...data,
        reviews: action?.payload?.data.map((data) => ({ ...data })),
      };

    case GET_ORDER_HISTORY:
      return data;

    case SET_ORDER_HISTORY:
      return {
        ...data,
        orderHistory: action?.data?.data.map((data) => ({ ...data })),
      };

      case GET_TRANSACTION_HISTORY:
      return data;

    case SET_TRANSACTION_HISTORY:
      return {
        ...data,
        transactionHistory: action?.data?.data.map((data) => ({ ...data })),
      };

    default:
      return data;
  }
};
export default homeReducer;
