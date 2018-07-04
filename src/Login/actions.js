import ajax from '../ajax';
import { createAction } from '../redux_utils'

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILURE = 'LOGIN_REQUEST_FAILURE';

export const loginRequest = createAction(LOGIN_REQUEST, 'loginRequestLoading')
export const loginSuccess = createAction(LOGIN_REQUEST_SUCCESS, 'loginStatus', 'username')
export const loginFailure = createAction(LOGIN_REQUEST_FAILURE, 'errors')


export function login(data) {
  return dispatch => {
    dispatch(loginRequest())
    return ajax.post(`/login`, data)
      .then(res => { dispatch(loginSuccess(res.data.data.users, res.data.data.users.id)) })
      .catch(errors => dispatch(loginFailure(errors)))
  }
}

export const LOG_OUT_USER = 'LOG_OUT_USER'
export function logOutUser() {
  return { type: LOG_OUT_USER }
}