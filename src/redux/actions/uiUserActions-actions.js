import {
  SET_LANGITUDE_LATITUDE,
  SET_CROP,
  SET_SOWINGDAY,
} from "../constants/uiUserActions-constants";

export const setLangitudeLatitude = data => ({
  type: SET_LANGITUDE_LATITUDE,
  data
});

export const setCrop = data => ({
  type: SET_CROP,
  data
});

export const setSowingDay = data => ({
  type: SET_SOWINGDAY,
  data
});
