import {
  SET_MAGIC_LENGTH
} from '../constants'

export const setMagicLength = magicLength => ({
  type: SET_MAGIC_LENGTH,
  magicLength
})