import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import uiUserActionsReducer from "./redux/reducers/uiUserActions-reducer";
import createSagaMiddleware from "redux-saga";
import mySaga from "./redux/saga/saga";
import { reducer as formReducer } from 'redux-form';

const allReducers = combineReducers({
  uiUserActionsReducer,
  formReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  allReducers,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
sagaMiddleware.run(mySaga);

export default store;
