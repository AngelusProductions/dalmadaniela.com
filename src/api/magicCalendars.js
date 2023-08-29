import axios from 'axios'
import { ROOT_API_URL, apiEndpoints } from '../constants/paths'

export const checkoutMagicCalendar = async payload => {
    const res = await axios.post(
        `${ROOT_API_URL}${apiEndpoints.magicCalendars.checkout}`,
        payload
    )
  return res.data
}
