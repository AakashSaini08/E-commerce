import axios from "axios";
import { takeLatest, put, all } from "redux-saga/effects";
import { setData, setUser } from "Redux/Actions/HomeActions";
import { GETDATA, GETUSER } from "Redux/Actions/HomeActions/actionStates";
import { STATUS_CODES } from "Services/Api/Constants";
import { postRequest, updateAuthToken } from "Shared/Axios";

function* products(payload) {
  // console.log('saga...')
  try {
    const response = yield axios.get(
      "https://e956-122-160-165-213.in.ngrok.io/getproduct/"
    );
    yield put(setData(Object.values(response?.data)));
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }
}

function* users({payload,callback = ()=>{}}) {
  try {
    const response = yield postRequest({
      API : "https://e956-122-160-165-213.in.ngrok.io/signin/",
      DATA : payload
    })
    console.log(response,"rep<><>>",response?.data.data);
    if(response.status == STATUS_CODES.SUCCESS){

      callback(response.data);
      yield put(setUser(response?.data?.data || {}));
      if(response.data.token){

        updateAuthToken(response.data.token);
      }
    }
    // const response = yield axios.post(
    //   "https://e956-122-160-165-213.in.ngrok.io/signin/"
    // );
  } catch (error) {
    if (payload && payload?.fail) {
      payload.fail(error);
    }
  }
}

function* WatchHomeSagaa() {
  yield all([takeLatest(GETDATA, products), takeLatest(GETUSER, users)]);
}
export default WatchHomeSagaa;
