import axios from 'axios'
import { ROOT_API_URL, apiEndpoints } from '../constants/paths'

export const superLogin = async payload => {
  debugger
  const res = await axios.post(
    `${ROOT_API_URL}${apiEndpoints.superClass.login}`,
    payload
  )
  return res.data
}

export const saveSuperClassSubscribeInfo = async payload => {
  const res = await axios.post(
    `${ROOT_API_URL}${apiEndpoints.superClass.saveInfo}`,
    payload
  )
  return res.data
}