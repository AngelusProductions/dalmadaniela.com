
import axios from 'axios'

import { ROOT_API_URL, apiEndpoints } from '../constants/paths'

export const sendUserRegistrationRequest = async payload => {
  const res = await axios.post(
    `${ROOT_API_URL}${apiEndpoints.signup}`,
    payload
  )
  return res.data
}
