
import axios from 'axios'
import { ROOT_API_URL, apiEndpoints } from '../constants/paths'

export const sendUserRegistrationRequest = async payload => {
  const test = `${ROOT_API_URL}${apiEndpoints.signup}`
  debugger
  const response = await axios.post(
    `${ROOT_API_URL}${apiEndpoints.signup}`,
    payload
  )
  debugger
  return response.data
}
