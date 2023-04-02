import axios from 'axios'
import { takeLatest,put,all} from 'redux-saga/effects'
import { setAddToCart, setData } from 'Redux/Actions/HomeActions'
import { ADD_TO_CART, GETDATA } from 'Redux/Actions/HomeActions/actionStates';

function* products(payload){
    // console.log('saga...')
    try{
    const response =  yield axios.get("https://54ab-122-160-165-213.in.ngrok.io/getproduct/");
    yield put(setData(Object.values(response?.data)));
           
} 
catch(error){
  if(payload && payload?.fail) {
    payload.fail(error)
  }
}
  }

  // function* myCart(payload){
  //   try{
  //     const response =  yield axios.get("https://54ab-122-160-165-213.in.ngrok.io/cart/");
  //     yield put(setAddToCart(Object.values(response?.data)));
             
  // } 
  // catch(error){
  //   if(payload && payload?.fail) {
  //     payload.fail(error)
  //   }
  // }
  // }

function* Sagaa(){
   
yield takeLatest(GETDATA,products);
// yield all([takeLatest(GETDATA, products), takeLatest( ADD_TO_CART,myCart)]);
}
export default Sagaa;
