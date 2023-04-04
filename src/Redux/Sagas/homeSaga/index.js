import axios from 'axios'
import { takeLatest,put, all} from 'redux-saga/effects'
import {  setAddToCart, setCart, setData } from 'Redux/Actions/HomeActions'
import { ADD_TO_CART, GETCART, GETDATA } from 'Redux/Actions/HomeActions/actionStates';
import { API } from 'Shared/Constants';
import { axiosInstance } from 'Shared/Request';

function* products(payload){
    // console.log('saga...')
    try{
    const response =  yield axios.get(API.getProduct);
    yield put(setData(Object.values(response?.data)));

} 
catch(error){
  if(payload && payload?.fail) {
    payload.fail(error)
  }
}
  }
//axios.instance

function* myCart({ payload: { data, success, fail } }) {
  try {
    // debugger;
    // console.log(data);
    const response = yield axiosInstance.post(
      API.cart,
      data
    );
    // console.log(response);
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

function* cartData(payload){
  // console.log(response);
  try{
  const response =  yield axiosInstance.get(API.cart);
  yield put(setCart(response?.data));

} 
catch(error){
if(payload && payload?.fail) {
  payload.fail(error)
}
}
}

function* Sagaa(){

// yield takeLatest(GETDATA,products);
yield all([takeLatest(GETDATA, products), takeLatest( ADD_TO_CART,myCart), takeLatest( GETCART,cartData)]);
}
export default Sagaa;


//"https://52d6-122-160-165-213.in.ngrok.io/cart/