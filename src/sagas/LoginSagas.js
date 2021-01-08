import { call, put } from 'redux-saga/effects'
import { login, testApi } from '../controllers/UserApi'

import LoginActions from '../reducers/LoginReducer'
import { callApi } from './CallApi';

export function* test(action) {
  const { username, password } = action;
  console.log('username', username)
  console.log('password', password)
  // make the call to the api
  // const response = yield call(login, username, password)
  const apiCall = call(testApi)
  const response = yield call(callApi, apiCall)
  console.log('response', response)
  // success?
  if (response.status === 200) {
    yield put(LoginActions.testSuccess('oke'))
  } else {
    yield put(LoginActions.testError())
  }
}
