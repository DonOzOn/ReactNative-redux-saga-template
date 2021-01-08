import { call, put } from 'redux-saga/effects'

import UserActions from '../reducers/UserReducer'
import { login } from '../controllers/UserApi'

export function* loginVov(api, action) {
  const { username, password } = action
  console.log('username', username)
  console.log('password', password)
  // make the call to the api
  const response = yield call(login, username, password)
  console.log('response', response)
  // success?
  if (response.ok) {
    yield put(UserActions.loginSuccess(response.data))
  } else {
    yield put(UserActions.loginError())
  }
}
