import axios from 'axios'

import { apiEndpoints, ROOT_API_URL } from '../constants/paths'

export const loginWithPassword = async payload => {
  const response = await axios.post(
    `${ROOT_API_URL}${apiEndpoints.loginWithPassword}`,
    payload
  )
  return response.data
}

export const loginWithJwt = async jwt => {
  const response = await axios.post(
    `${ROOT_API_URL}${apiEndpoints.loginWithJwt}`,
    {
      token: jwt
    }
  )

  return {
    email: response.data.email
  }
}
