import axios from 'axios'
import { ROOT_API_URL, apiEndpoints } from '../constants/paths'

export const checkForReoccuringIP = async IP => {
  const res = await axios.get(`${ROOT_API_URL}${apiEndpoints.superClass.checkIP}/${IP}`)
  return res.data.isReocurringIP
}

export const saveSuperClassSubscribeInfo = async payload => {
  const res = await axios.post(
    `${ROOT_API_URL}${apiEndpoints.superClass.saveInfo}`,
    payload
  )
  return res.data
}