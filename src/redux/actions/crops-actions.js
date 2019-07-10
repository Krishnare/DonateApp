import {
  GET_CROPS_REQUEST,
  GET_CROPS_SUCCESS,
  GET_CROPS_FAILURE
} from "../constants/crops-constants";
import axios from "axios";
import { apiUrl } from "../../assets/config/keys";
import { toastApiError } from '../../utils/toastApiError';

export const getCrops = () => {
  return (dispatch) => {
    dispatch({ type: GET_CROPS_REQUEST });
    return axios
      .get(`${apiUrl}/v1/crophealth/getcrops`)
      .then(response => {
        dispatch({ type: GET_CROPS_SUCCESS, payload: response.data.results });
      })
      .catch(error => {
        toastApiError('Server Error: Get Crops', error);
        dispatch({ type: GET_CROPS_FAILURE, error: error });
      });
  };
};
