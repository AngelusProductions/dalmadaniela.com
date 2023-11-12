import axios from 'axios'

import { ROOT_API_URL, apiEndpoints } from '../constants/paths'

export const sendPaymentRequest = (
  amount,
  description
) => async (token) => {
  debugger
  const res = await axios.post(`${ROOT_API_URL}${apiEndpoints.payment}`, {
    description,
    source: token.id,
    email: token.email,
    currency: 'USD',
    amount
  })
  console.log(res)
  return res
}
