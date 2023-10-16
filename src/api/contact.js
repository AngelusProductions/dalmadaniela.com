import axios from 'axios'
import { ROOT_API_URL, apiEndpoints } from '../constants/paths'

export const sendContactForm = async payload => {
  const res = await axios.post(
    `${ROOT_API_URL}${apiEndpoints.contact}`,
    payload
  )
  return res.data
}
