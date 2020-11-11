import { postReducer } from "./postReducer";
import { RootState } from "interfaces/interfaces";
import { AnyAction, CombinedState, combineReducers, Reducer } from "redux";

const rootReducer: Reducer<
  CombinedState<RootState>,
  AnyAction
> = combineReducers({
  post: postReducer,
});

export default rootReducer;
