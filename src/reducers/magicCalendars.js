import { SET_MAGIC_LENGTH, SET_MAGIC_VALUES } from '../constants'

const initialState = {
  magicLength: null,
  brandName: '',
  website: '',
  socialMedia1: '',
  socialMedia2: '',
  description: '',
  objective: '',
  brandColors: [],
  brandEmojis: [],
  brandColor1: null,
  brandColor2: null,
  brandColor3: null,
  brandColor4: null,
  brandColor5: null,
  brandEmoji1: null,
  brandEmoji2: null,
  brandEmoji3: null,
  brandEmoji4: null,
  brandEmoji5: null,
  specificTopics: '',
  useHolidays: true,
  country: 'US',  
  createFromScratch: false,
  graphics: [],
  styleId: 4
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
