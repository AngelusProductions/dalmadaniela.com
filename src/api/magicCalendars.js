import axios from 'axios'
import { ROOT_API_URL, apiEndpoints } from '../constants/paths'

export const createMagicCalendar = async payload => {
    const res = await axios.post(
        `${ROOT_API_URL}${apiEndpoints.magicCalendars.create}`,
        payload
    )
  return res.data
}

export const getChatGPTResponse = async payload => {
    const res = await axios.post(
        `${ROOT_API_URL}${apiEndpoints.magicCalendars.chatGPT}`,
        payload
    )
  return res.data
}

export const saveGraphic = async payload => {
    const res = await axios.post(
        `${ROOT_API_URL}${apiEndpoints.magicCalendars.saveGraphic}`,
        payload
    )
  return res.data
}