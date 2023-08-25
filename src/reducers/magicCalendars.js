import { SET_MAGIC_SPEED } from '../constants'

const initialState = {
  magicSpeed: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MAGIC_SPEED:
      return {
        ...state,
        magicSpeed: action.magicSpeed
      }
    default:
      return state
  }
}
