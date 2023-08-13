import axios from 'axios'

import { apiEndpoints, ROOT_API_URL } from '../constants/paths'

export const loginWithPassword = async payload => {
  const res = await axios.post(
    `${ROOT_API_URL}${apiEndpoints.loginWithPassword}`,
    payload
  )
  return res.data
}

export const loginWithJwt = async jwt => {
  const res = await axios.post(
    `${ROOT_API_URL}${apiEndpoints.loginWithJwt}`,
    {
      token: jwt
    }
  )

  return {
    email: res.data.email
  }
}
