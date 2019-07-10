import {
  GET_CROPS_REQUEST,
  GET_CROPS_SUCCESS,
  GET_CROPS_FAILURE
} from "../constants/crops-constants";
const initialState = {
  loading: false,
  success: false,
  error: false,
  errorDetails: {},
};
export default function(state = initialState, action = {}) {
  switch (action.type) {
    case GET_CROPS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_CROPS_SUCCESS:
      return {
        ...state,
        success: true,
        loading: false,
        error: false,
        errorDetails: {},
        items: action.payload
      };
    case GET_CROPS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
        errorDetails: action.error
      };
    default:
      return {
        ...state
      };
  }
}
