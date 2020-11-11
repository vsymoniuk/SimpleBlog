import { PostActionTypes } from './../../types/post';
import { PostsReducerState } from "@_types/interfaces";

const initialState: PostsReducerState = {
  posts: [],
  currentPost: null,
  error: '',
};

export const postReducer = (
  state = initialState,
  action: PostActionTypes
): PostsReducerState => {
  switch (action.type) {
      
    default:
      return { ...state };
  }
};
