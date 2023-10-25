import {
  SET_MAGIC_LENGTH,
  SET_MAGIC_VALUES
} from '../constants'

export const setMagicLength = magicLength => ({
  type: SET_MAGIC_LENGTH,
  magicLength
})

export const setMagicValues = valuePairs => ({
  type: SET_MAGIC_VALUES,
  valuePairs
})