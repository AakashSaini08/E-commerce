import { all, fork } from "redux-saga/effects";

import watchAuth from "./Auth";
import WatchHomeSagaa from "./homeSaga";

function* rootSaga() {
  yield all([fork(watchAuth),fork(WatchHomeSagaa)]);
}

export default rootSaga;
