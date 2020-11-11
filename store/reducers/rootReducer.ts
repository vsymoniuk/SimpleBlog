import { commentReducer } from './commentReducer';
import { postReducer } from './postReducer';
import { RootState } from '@_types/interfaces';
import { AnyAction, CombinedState, combineReducers, Reducer } from "redux";

const rootReducer: Reducer<
  CombinedState<RootState>,
  AnyAction
> = combineReducers({
  post: postReducer,
  comment: commentReducer,
});

export default rootReducer;
