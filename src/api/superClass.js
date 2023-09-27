import axios from 'axios'
import { ROOT_API_URL, apiEndpoints } from '../constants/paths'

export const getSuperUserProgress = async email => {
  const res = await axios.get(`${ROOT_API_URL}${apiEndpoints.superClass.progress}/${encodeURI(email)}`)
  return res.data
}

export const getSuperVideoProgress = async (email, videoId) => {
  const res = await axios.get(`${ROOT_API_URL}${apiEndpoints.superClass.progress}/${videoId}/${encodeURI(email)}`)
  return res.data
}

export const saveSuperVideoProgress = async payload => {
  const res = await axios.post(
    `${ROOT_API_URL}${apiEndpoints.superClass.progress}`,
    payload
  )
  return res.data
}

export const saveSuperVideoCompletion = async payload => {
  const res = await axios.post(
    `${ROOT_API_URL}${apiEndpoints.superClass.complete}`,
    payload
  )
  return res.data
}

export const superLogin = async payload => {
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