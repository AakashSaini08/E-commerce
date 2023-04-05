import { all, fork } from "redux-saga/effects";
import Sagaa from "./Auth";
import WatchHomeSagaa from "./homeSaga";

function* rootSaga() {
  yield all([fork(Sagaa), fork(WatchHomeSagaa)]);
}

export default rootSaga;
