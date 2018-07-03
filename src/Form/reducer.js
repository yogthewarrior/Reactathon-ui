import {Map, fromJS} from 'immutable'
import * as actions from './actions'

export default function (state = Map(), action) {
  switch (action.type) {
  case actions.FORM_SET_INITIAL_VALUES: {
    return state
        .setIn([action.formName, 'initialValues'], fromJS(action.values))
        .setIn([action.formName, 'currentValues'], fromJS(action.values))
  }
  case actions.FORM_SET_VALUE: {
    return state.setIn([action.formName, 'currentValues', action.field], action.value)
  }
  case actions.FORM_SET_VALUE_DEEP: {
    return state.setIn([action.formName, 'currentValues', action.parentField, action.field], action.value)
  }
  case actions.FORM_RESET: {
    return state.setIn([action.formName, 'currentValues'], state.getIn([action.formName, 'initialValues'], Map()))
  }
  case actions.FORM_DELETE_FIELD:
    return state.deleteIn([action.formName, 'currentValues', action.field])
  default:
    return state
  }
}
