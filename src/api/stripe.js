import axios from 'axios'

import { ROOT_API_URL, apiEndpoints } from '../constants/paths'

export const sendPaymentRequest = (
  amount,
  description
) => async (token) => {
  const res = await axios.post(`${ROOT_API_URL}${apiEndpoints.payment}`, {
    description,
    source: token.id,
    email: token.email,
    currency: 'USD',
    amount
  })
  return res
}

export const createPaymentIntent = async magicLength => {
  const res = await axios.post(
    `${ROOT_API_URL}${apiEndpoints.stripe.createPaymentIntent}`, {
      magicLength
    }
  );
  return res.data;
};
