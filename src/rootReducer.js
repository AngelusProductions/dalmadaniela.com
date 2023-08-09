import { combineReducers } from 'redux'
import authReducer from './reducers/auth'
import currentUserReducer from './reducers/currentUser'
import blogReducer from './reducers/blog'

export const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  auth: authReducer,
  blog: blogReducer
})
