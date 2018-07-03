import * as actions from "./actions"
import {Map, List, fromJS} from "immutable"

export function Dashboard (state = Map(), action) {
  switch (action.type) {

  case actions.FETCH_EVENTS_REQUEST:
    return state.setIn(["eventsRequestLoading"], true)
  case actions.FETCH_EVENTS_REQUEST_SUCCESS:
    return state
        .setIn(["eventsRequestLoading"], false)
        .setIn(["events"], fromJS(action.events))
  case actions.FETCH_EVENTS_REQUEST_FAILURE:
    return state.setIn(['errors'], fromJS(action.errors))
                .setIn(["eventsRequestLoading"], false)
  default:
    return state
  }
}

export default Dashboard
