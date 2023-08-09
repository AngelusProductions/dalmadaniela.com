import {
  UPDATE_FIELD_AUTH,
  LOGIN_FAILURE,
  REGISTER_ACCOUNT_FAILURE,
  REGISTER_ACCOUNT_REQUEST,
  LOGIN_REQUEST
} from '../constants'

const login= {
  email: '',
  password: '',
  loading: false,
  errors: {
    email: undefined,
    password: undefined
  }
}

const signup = {
  email: '',
  password: '',
  passwordConf: '',
  loading: false,
  errors: {
    email: undefined,
    password: undefined,
    passwordConf: undefined
  }
}

const initialState = {
  login,
  signup
}

export default (
  state = initialState,
  action
)=> {
  switch (action.type) {
    case UPDATE_FIELD_AUTH:
      return {
        ...state,
        [action.form]: {
          ...state[action.form],
          [action.key]: action.value,
          errors: {
            ...state[action.form].errors,
            [action.key]: undefined
          }
        }
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        login: {
          ...state.login,
          loading: false,
          errors: {
            ...state.login.errors,
            ...action.errors
          }
        }
      }
    case REGISTER_ACCOUNT_FAILURE:
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: false,
          errors: { ...state.signup.errors, ...action.errors }
        }
      }
    case REGISTER_ACCOUNT_REQUEST:
      return {
        ...state,
        signup: {
          ...state.signup,
          loading: true
        }
      }
    case LOGIN_REQUEST:
      return {
        ...state,
        login: {
          ...state.login,
          loading: true
        }
      }
    default:
      return state
  }
}
