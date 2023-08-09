import {
  REGISTER_ACCOUNT_SUCCESS,
  REGISTER_ACCOUNT_FAILURE,
  REGISTER_ACCOUNT_REQUEST
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
