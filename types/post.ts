import { IPost } from "./interfaces";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_DETAILED_POST = "FETCH_DETAILED_POST";

export const FETCH_POST_START = "FETCH_POST_START";
export const FETCH_POST_ERROR = "FETCH_POST_ERROR";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";

export const CREATE_POST = "CREATE_POST";

interface CreatePostAction {
  type: typeof CREATE_POST;
  post: IPost;
}

interface FetchPostsAction {
  type: typeof FETCH_POSTS;
}

interface FetchDetailedPostAction {
  type: typeof FETCH_DETAILED_POST;
  id: string;
}

interface FetchPostStartAction {
  type: typeof FETCH_POST_START;
}

interface FetchPostSuccessAction {
  type: typeof FETCH_POST_SUCCESS;
  posts: IPost[];
}

interface FetchPostErrorAction {
  type: typeof FETCH_POST_ERROR;
  error: string;
}

export type PostActionTypes =
  | CreatePostAction
  | FetchPostsAction
  | FetchDetailedPostAction
  | FetchPostStartAction
  | FetchPostSuccessAction
  | FetchPostErrorAction;
