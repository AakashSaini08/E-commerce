import axios from 'axios'
import { takeLatest,put,} from 'redux-saga/effects'
import { setData } from 'Redux/Actions/HomeActions'
import { GETDATA } from 'Redux/Actions/HomeActions/actionStates';

function* products(payload){
    // console.log('saga...')
    try{
    const response =  yield axios.get("https://54ab-122-160-165-213.in.ngrok.io/getproducts/");
    yield put(setData(Object.values(response?.data)));
           
} 
catch(error){
  if(payload && payload?.fail) {
    payload.fail(error)
  }
}
  }
function* Sagaa(){
   
yield takeLatest(GETDATA,products);
}
export default Sagaa;
