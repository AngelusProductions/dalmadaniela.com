import {  
  SUPER_LOGIN_REQUEST,
  SUPER_LOGIN_SUCCESS,
  SUPER_LOGIN_FAILURE,
  CLEAR_CURRENT_SUPER_INFO
} from '../constants'

const initialState = {
  superUser: null,
  loading: false,
  error: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SUPER_LOGIN_REQUEST:
      return {
        ...state,
        loading: true
      }
    case SUPER_LOGIN_SUCCESS:
      return {
        ...state,
        superUser: action.user,
        error: null,
        loading: false
      }
    case SUPER_LOGIN_FAILURE:
      return {
        ...state,
        superUser: null,
        error: action.error,
        loading: false
      }
    case CLEAR_CURRENT_SUPER_INFO:
      return {
        ...state, 
        superUser: null,
        loading: null,
        error: null
      }
    default:
      return state
  }
}
