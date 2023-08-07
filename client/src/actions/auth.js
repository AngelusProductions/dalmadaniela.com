import { UPDATE_FIELD_AUTH } from '../constants'

export const changeAuthFieldText = (form, key, value) => ({
  type: UPDATE_FIELD_AUTH,
  form,
  key,
  value
})
