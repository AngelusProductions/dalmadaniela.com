import { SET_MAGIC_LENGTH, SET_MAGIC_VALUES } from '../constants'

const initialState = {
  magicLength: null,
  brandName: 'Hello',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MAGIC_LENGTH:
      return {
        ...state,
        magicLength: action.magicLength
      }
    case SET_MAGIC_VALUES:
      return {
        ...state,
        ...action.valuePairs
      }
    default:
      return state
  }
}
