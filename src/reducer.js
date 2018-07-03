import {
    combineReducers
} from 'redux-immutable'
import Login from './Login/reducer'
import Dashboard from './Dashboard/reducer'
import {fromJS} from 'immutable'
import Forms from './Form/reducer'
import {LOCATION_CHANGE} from 'react-router-redux'


const initialState = fromJS({
  locationBeforeTransitions: null
})

function Routes(state = initialState, { type, payload } = {}) {
  if (type === LOCATION_CHANGE) {
    return state.merge({locationBeforeTransitions: fromJS(payload)})
  }
  return state
}

const appReducer = combineReducers({
  Routes,
  Login,
  Dashboard,
  Forms
})

const rootReducer = (state, action) => {
  // console.log('rootReducer is called')
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
