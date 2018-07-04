import * as actions from "./actions"
import {Map, List, fromJS} from "immutable"

export function Login (state = Map(), action) {
  switch (action.type) {

  case actions.LOGIN_REQUEST:
    return state.setIn(["loginRequestLoading"], true)
  case actions.LOGIN_REQUEST_SUCCESS:
    return state
        .setIn(["loginRequestLoading"], false)
        .setIn(["username"], fromJS(action.username))
        .setIn(["loginStatus"], fromJS(action.loginStatus))
  case actions.LOGIN_REQUEST_FAILURE:
    return state.setIn(['errors'], fromJS(action.errors))
                .setIn(["loginRequestLoading"], false)
  case actions.LOG_OUT_USER:
   console.log('---LOG_OUT_USER--LOG_OUT_USER-------')
   return state.deleteIn(['Login'])
  default:
    return state
  }
}

export default Login
