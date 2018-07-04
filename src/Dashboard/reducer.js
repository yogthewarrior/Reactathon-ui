import * as actions from "./actions"
import { Map, List, fromJS } from "immutable"

export function Dashboard(state = Map(), action) {
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
    


    case actions.FETCH_COMMENTS_REQUEST:
      return state.setIn(["commentsRequestLoading"], true)
    case actions.FETCH_COMMENTS_REQUEST_SUCCESS:
    console.log('FETCH_COMMENTS_REQUEST_SUCCESS----')
      return state
        .setIn(["commentsRequestLoading"], false)
        .setIn(["comments"], fromJS(action.comments))
    case actions.FETCH_COMMENTS_REQUEST_FAILURE:
      return state.setIn(['errors'], fromJS(action.errors))
        .setIn(["commentsRequestLoading"], false)
    
    default:
      return state
  }
}

export default Dashboard
