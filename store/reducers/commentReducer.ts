import { CommentActionTypes } from '@_types/comment';
import { CommentReducerState } from '@_types/interfaces';

const initialState: CommentReducerState = {
  comments: []
};

export const commentReducer = (
  state = initialState,
  action: CommentActionTypes
): CommentReducerState => {
  switch (action.type) {
      
    default:
      return { ...state };
  }
};
