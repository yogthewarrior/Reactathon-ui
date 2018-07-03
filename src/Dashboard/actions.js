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
