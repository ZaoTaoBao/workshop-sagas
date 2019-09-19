import { compose, applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import { rootSaga } from "./sagas";
import reducer from "./reducers";

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const composeEnhancers =
    global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagaMiddleware.run(rootSaga);

  return store;
};
