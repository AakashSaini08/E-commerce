import {
  ADD_TO_CART,
  GETCART,
  GETDATA,
  SETCART,
  SETDATA,
  SET_ADD_TO_CART,
} from "../../Actions/HomeActions/actionStates";

const initialData = {
  products: [],
  cartData: [],
  checkoutData: [],
};

const homeReducer = (data = initialData, action) => {
  // console.log('reducer....')

  switch (action.type) {
    case GETDATA:
      return data;
    case SETDATA:
      // console.log('setdata........')
      return { ...data, products: action?.data?.map((data) => ({ ...data })) };

    case ADD_TO_CART:
      return data;

    case SET_ADD_TO_CART:
      return { ...data, cartData: action?.data?.map((data) => ({ ...data })) };

    case GETCART:
      return data;

    case SETCART:
      // debugger;
      // console.log("checkoutData");
      return {
        ...data,
        checkoutData: action?.data?.data?.map((data) => ({ ...data })),
        totalPrice: action?.data?.Total_price,
      };

    default:
      return data;
  }
};
export default homeReducer;
