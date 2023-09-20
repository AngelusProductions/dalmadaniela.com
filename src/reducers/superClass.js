import {  
  SUPER_LOGIN_REQUEST,
  SUPER_LOGIN_SUCCESS,
  SUPER_LOGIN_FAILURE,
  CLEAR_CURRENT_SUPER_USER 
} from '../constants'

const initialState = {
  superUser: null,
  loading: false,
  errors: null
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
        errors: null,
        loading: false
      }
    case SUPER_LOGIN_FAILURE:
      return {
        ...state,
        superUser: null,
        errors: action.errors,
        loading: false
      }
    case CLEAR_CURRENT_SUPER_USER:
      return {
        ...state, 
        superUser: null
      }
    default:
      return state
  }
}
