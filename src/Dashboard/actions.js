import ajax from '../ajax';
import {createAction} from '../redux_utils'

export const FETCH_EVENTS_REQUEST = 'FETCH_EVENTS_REQUEST';
export const FETCH_EVENTS_REQUEST_SUCCESS = 'FETCH_EVENTS_REQUEST_SUCCESS';
export const FETCH_EVENTS_REQUEST_FAILURE = 'FETCH_EVENTS_REQUEST_FAILURE';

export const fetchEventsRequest = createAction(FETCH_EVENTS_REQUEST, 'fetchEventsRequestLoading')
export const fetchEventsSuccess = createAction(FETCH_EVENTS_REQUEST_SUCCESS,'events')
export const fetchEventsFailure = createAction(FETCH_EVENTS_REQUEST_FAILURE, 'errors')


export function FetchEvents () {
  return dispatch => {
    dispatch(fetchEventsRequest())
    return ajax.get(`/getevents`)
      .then(res => {
        dispatch(fetchEventsSuccess(res.data.events))
      })
      .catch(errors => dispatch(fetchEventsFailure(errors)))
  }
}


export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_REQUEST_SUCCESS = 'FETCH_COMMENTS_REQUEST_SUCCESS';
export const FETCH_COMMENTS_REQUEST_FAILURE = 'FETCH_COMMENTS_REQUEST_FAILURE';

export const fetchCommentsRequest = createAction(FETCH_COMMENTS_REQUEST, 'fetchCommentsRequestLoading')
export const fetchCommentsSuccess = createAction(FETCH_COMMENTS_REQUEST_SUCCESS,'comments')
export const fetchCommentsFailure = createAction(FETCH_COMMENTS_REQUEST_FAILURE, 'errors')


export function FetchComments () {
  return dispatch => {
    dispatch(fetchCommentsRequest())
    return ajax.get(`/getcomments`)
      .then(res => {
        dispatch(fetchCommentsSuccess(res.data.data.alldiscussions))
      })
      .catch(errors => dispatch(fetchCommentsFailure(errors)))
  }
}
