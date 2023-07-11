import { LOGIN_SUCCESS, CLEAR_CURRENT_USER } from '../constants'

const initialState = {
  loggedIn: false,
  email: null,
  token: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
        email: action.email,
        token: action.token
      }
    case CLEAR_CURRENT_USER:
      return initialState
    default:
      return state
  }
}
