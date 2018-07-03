import {createAction} from '../redux_utils'

export const FORM_SET_INITIAL_VALUES = 'FORM_SET_INITIAL_VALUES'
export const FORM_SET_VALUE = 'FORM_SET_VALUE'
export const FORM_RESET = 'FORM_RESET'
export const FORM_SET_VALUE_DEEP = 'FORM_SET_VALUE_DEEP'

export const setInitialValues = createAction(FORM_SET_INITIAL_VALUES, 'formName', 'values')
export const setValue = createAction(FORM_SET_VALUE, 'formName', 'field', 'value')
export const setValueDeep = createAction(FORM_SET_VALUE_DEEP, 'formName', 'parentField', 'field', 'value')
export const reset = createAction(FORM_RESET, 'formName')

export const FORM_DELETE_FIELD = 'FORM_DELETE_FIELD'
export const deleteField = createAction(FORM_DELETE_FIELD, 'formName', 'field')
