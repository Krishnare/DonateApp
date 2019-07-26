import { call, put, takeEvery, select, cancel, delay, take } from "redux-saga/effects";
import { requestApiData } from '../actions/uiUserActions-actions';
import  CHECKBOXES_DESCRIPTION from '../constants/uiUserActions-constants';
import { fetchData } from "../../data/checkBoxapi";

const getPage = state => state.nextPage;
function* fetchProducts(action) {
    console.log("Hello Fetch");
    try {
      const page = yield select(getPage);
      const dataDetail = yield call(fetchData, page);
      yield put(requestApiData(dataDetail));
    } catch (e) {
      console.log(e);
    }
  }
function* mySaga() {
    yield call([CHECKBOXES_DESCRIPTION, fetchProducts]);
  }
  export default mySaga;