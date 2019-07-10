import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redux/reducers";
import { createLogger } from 'redux-logger';

const initialState = {};
const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  const logger = createLogger();
  middleware.push(logger);
}

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware))
);
export default store;
