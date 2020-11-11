import { all } from "redux-saga/effects";
import commentSagas from "./comment";
import postSagas from "./post";

export default function* rootSaga() {
  yield all([postSagas(), commentSagas()]);
}
