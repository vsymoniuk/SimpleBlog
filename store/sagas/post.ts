import { FETCH_POSTS } from '@_types/post';
import { fetchPostError, fetchPostStart, fetchPostSuccess } from "./../actions/post";
import { all, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchPosts() {
  try {
    yield put(fetchPostStart());
    const { data: posts } = yield call(
      axios.get,
      `${process.env.BASE_API_URL}/posts`
    );

    yield put(fetchPostSuccess(posts));
  } catch (error) {
    yield put(fetchPostError(error?.message));
  }
}

function* watchFetchPosts() {
  yield takeEvery(FETCH_POSTS, fetchPosts);
}

export default function* postSagas() {
  yield all([
    watchFetchPosts()
  ]);
}

