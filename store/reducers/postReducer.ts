import {
  FETCH_POST_START,
  PostActionTypes,
  FETCH_POST_ERROR,
  FETCH_POST_SUCCESS,
  SET_CURRENT_POST,
} from "@_types/post";
import { PostsReducerState } from "@_types/interfaces";

const initialState: PostsReducerState = {
  posts: [],
  currentPost: null,
  loading: false,
  error: "",
};

export const postReducer = (
  state = initialState,
  action: PostActionTypes
): PostsReducerState => {
  switch (action.type) {
    case FETCH_POST_START:
      return { ...state, loading: true };

    case FETCH_POST_ERROR:
      return { ...state, loading: false, error: action.error };

    case FETCH_POST_SUCCESS:
      return { ...state, loading: false, posts: action.posts };

    case SET_CURRENT_POST:
      return { ...state, loading: false, currentPost: action.post };

    default:
      return { ...state };
  }
};
