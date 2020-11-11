import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware, { Task } from "redux-saga";

import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";

// const makeStore = (initState) => {
//   const sagaMiddleware = createSagaMiddleware();
//   const store = createStore(
//     rootReducer,
//     initState,
//     applyMiddleware(sagaMiddleware)
//   );

//   sagaMiddleware.run(rootSaga);

//   return store
// };

// export default makeStore;

interface MyStore extends Store {
  sagaTask: Task;
}

function makeStore(preloadedState, { isServer, req = null }) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware)
  ) as MyStore;

  if (req || !isServer) {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  }

  return store;
}

export default makeStore;
