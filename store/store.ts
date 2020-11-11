import { applyMiddleware, compose, createStore } from "redux";
import rootReducer from "./reducers/rootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas/rootSaga";

function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore();
