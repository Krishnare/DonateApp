import { combineReducers } from "redux";
import {reducer as toastrReducer} from 'react-redux-toastr'; // https://www.npmjs.com/package/react-redux-toastr
import uiUserActionsReducer from "./uiUserActions-reducer";

export default combineReducers({
  toastr: toastrReducer,
  uiUserActions: uiUserActionsReducer,
});
