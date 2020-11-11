import { SET_CURRENT_POST } from './../../types/post';
import {
  FETCH_POSTS,
  FETCH_POST_START,
  FETCH_DETAILED_POST,
  CREATE_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  PostActionTypes,
} from "@_types/post";
import { IPost } from "@_types/interfaces";

export const createPost = (post: IPost): PostActionTypes => ({
  type: CREATE_POST,
  post,
});

export const setCurrentPost = (post: IPost): PostActionTypes => ({
    type: SET_CURRENT_POST,
    post,
  });

export const fetchPosts = (): PostActionTypes => ({
  type: FETCH_POSTS,
});

export const fetchDetailedPost = (id: string): PostActionTypes => ({
  type: FETCH_DETAILED_POST,
  id,
});

export const fetchPostStart = (): PostActionTypes => ({
  type: FETCH_POST_START,
});

export const fetchPostSuccess = (posts: IPost[]): PostActionTypes => ({
  type: FETCH_POST_SUCCESS,
  posts,
});

export const fetchPostError = (error: string): PostActionTypes => ({
  type: FETCH_POST_ERROR,
  error,
});
