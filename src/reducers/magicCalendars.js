import { SET_MAGIC_LENGTH } from '../constants'

const initialState = {
  magicLength: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MAGIC_LENGTH:
      return {
        ...state,
        magicLength: action.magicLength
      }
    default:
      return state
  }
}
