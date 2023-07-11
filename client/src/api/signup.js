
import { ROOT_API_URL, apiEndpoints } from '../constants/routes'

export const sendUserRegistrationRequest = async payload => {
  const response = await axios.post(
    `${ROOT_API_URL}${apiEndpoints.signup}`,
    payload
  )
  return response.data
}
