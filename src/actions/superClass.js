import {  
  SUPER_LOGIN_REQUEST,
  SUPER_LOGIN_SUCCESS,
  SUPER_LOGIN_FAILURE,
  CLEAR_CURRENT_SUPER_INFO
} from '../constants'

export const superLoginRequest = () => ({
  type: SUPER_LOGIN_REQUEST
})

export const superLoginSuccess = user => ({
  type: SUPER_LOGIN_SUCCESS,
  user
})

export const superLoginFailure = error => ({
  type: SUPER_LOGIN_FAILURE,
  error
})

export const clearCurrentSuperInfo = () => ({
  type: CLEAR_CURRENT_SUPER_INFO
})