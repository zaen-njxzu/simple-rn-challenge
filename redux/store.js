import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from "./reducers"

// Redux: Store
const store = createStore(
  rootReducer,
  applyMiddleware(
    createLogger()
  )
);

export {
  store,
  persistor,
};