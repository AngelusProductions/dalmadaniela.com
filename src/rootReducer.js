import { combineReducers } from 'redux'
import authReducer from './reducers/auth'
import currentUserReducer from './reducers/currentUser'
import blogReducer from './reducers/blog'
import magicCalendarsReducer from './reducers/magicCalendars'
import superClassReducer from './reducers/superClass'

export const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  auth: authReducer,
  blog: blogReducer,
  magicCalendars: magicCalendarsReducer,
  superClass: superClassReducer
})
