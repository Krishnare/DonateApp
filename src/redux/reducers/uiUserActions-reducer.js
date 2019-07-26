import CHECKBOXES_DESCRIPTION  from "../constants/uiUserActions-constants";

function reducers(state = {}, action) {
  switch (action.type) {
    case CHECKBOXES_DESCRIPTION:
      return {
        ...state,
        response: action.response
      };
    default:
      return state;
  }
}
export default reducers;
