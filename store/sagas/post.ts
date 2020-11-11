import { CreatePostAction, CREATE_POST } from "./../../types/post";
import { IPost } from "@_types/interfaces";
import {
  FETCH_POSTS,
  FetchDetailedPostAction,
  FETCH_DETAILED_POST,
} from "@_types/post";
import {
  fetchPostError,
  fetchPostStart,
  fetchPostSuccess,
  setCurrentPost,
} from "./../actions/post";
import { all, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function* fetchPosts() {
  try {
    yield put(fetchPostStart());
    const {data: posts} = yield call(
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

function* fetchPostById(action: FetchDetailedPostAction) {
  try {
    yield put(fetchPostStart());
    const post: IPost = yield call(
      axios.get,
      `${process.env.BASE_API_URL}/posts/${action.id}?_embed=comments`
    );
    yield put(setCurrentPost(post));
  } catch (error) {
    yield put(fetchPostError(error?.message));
  }
}

function* watchFetchPostById() {
  yield takeEvery(FETCH_DETAILED_POST, fetchPostById);
}

function* createPost(action: CreatePostAction) {
  try {
    const post: IPost = yield call(
      axios.post,
      `${process.env.BASE_API_URL}/posts`,
      action.post
    );
    yield put(setCurrentPost(post));
  } catch (error) {
    console.error("createPost error:", error?.message);
  }
}

function* watchCreatePost() {
  yield takeEvery(CREATE_POST, createPost);
}

export default function* postSagas() {
  yield all([watchFetchPosts(), watchFetchPostById(), watchCreatePost()]);
}
