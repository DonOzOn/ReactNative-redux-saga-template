import { all, takeLatest } from 'redux-saga/effects'

import { LoginTypes } from '../reducers/LoginReducer'
import client from 'controllers/HttpClient';
import {test} from './LoginSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = client;
/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(LoginTypes.TEST_REQUEST, test),
  ])
}
