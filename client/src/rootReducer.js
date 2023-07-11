import { combineReducers } from 'redux'
import authForms from './reducers/formAuth'
import currentUser from './reducers/currentUser'

export const rootReducer = combineReducers({
  currentUser,
  authForms
})
