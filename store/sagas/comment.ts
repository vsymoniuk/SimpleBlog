import { CreateCommentAction, CREATE_COMMENT } from "@_types/comment";
import { all, call, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* createComment(action: CreateCommentAction) {
  try {
    yield call(
      axios.post,
      `${process.env.BASE_API_URL}/comments`,
      action.comment
    );
  } catch (error) {
    console.error("createComment error:", error?.message);
  }
}

function* watchCreateComment() {
  yield takeEvery(CREATE_COMMENT, createComment);
}

export default function* commentSagas() {
  yield all([watchCreateComment()]);
}
