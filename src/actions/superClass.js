import {  
  SUPER_LOGIN_REQUEST,
  SUPER_LOGIN_SUCCESS,
  SUPER_LOGIN_FAILURE,
  CLEAR_CURRENT_SUPER_USER 
} from '../constants'

export const superLoginRequest = () => ({
  type: SUPER_LOGIN_REQUEST
})

export const superLoginSuccess = user => ({
  type: SUPER_LOGIN_SUCCESS,
  user
})

export const superLoginFailure = errors => ({
  type: SUPER_LOGIN_FAILURE,
  errors
})

export const clearCurrentSuperUser = () => ({
  type: CLEAR_CURRENT_SUPER_USER
})