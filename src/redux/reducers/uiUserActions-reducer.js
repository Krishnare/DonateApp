import {
  SET_LANGITUDE_LATITUDE,
  SET_CROP,
  SET_SOWINGDAY,
} from "../constants/uiUserActions-constants";

export default function(state = {selectedCrop: null, sowingDay: new Date()}, action) {
  switch (action.type) {
    case SET_LANGITUDE_LATITUDE:
      return {
        ...state,
        croplocation: action.data,
      };
    case SET_CROP:
      return {
        ...state,
          selectedCrop: action.data
      };
    case SET_SOWINGDAY:
      return {
        ...state,
          sowingDay: action.data
      };
    default:
      return state;
  }
}
