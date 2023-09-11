import {
  REGISTER_ACCOUNT_SUCCESS,
  REGISTER_ACCOUNT_FAILURE,
  REGISTER_ACCOUNT_REQUEST,
  CLEAR_SIGNUP_ERRORS
} from '../constants'

export const registerAccountRequest = {
  type: REGISTER_ACCOUNT_REQUEST
}

export const registerAccountSuccess = () => ({
  type: REGISTER_ACCOUNT_SUCCESS
})

export const registerAccountFailure = errors => ({
  type: REGISTER_ACCOUNT_FAILURE,
  errors
})

export const clearSignupErrors = {
  type: CLEAR_SIGNUP_ERRORS
}