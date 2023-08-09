import axios from 'axios'
import { ROOT_API_URL, apiEndpoints } from '../constants/paths'

export const checkForReoccuringIP = async IP => {
  const response = await axios.get(`${ROOT_API_URL}${apiEndpoints.superClass.checkIP}/${IP})}`)
  debugger
  return response.data
}
