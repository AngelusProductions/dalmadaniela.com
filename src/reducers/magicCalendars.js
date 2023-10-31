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
  specificTopics: '',
  useHolidays: true,
  brandColor1: '#FFFFFF',
  brandColor2: '#FFFFFF',
  brandColor3: '#FFFFFF',
  brandColor4: '#FFFFFF',
  brandColor5: '#FFFFFF',
  brandEmoji1: null,
  brandEmoji2: null,
  brandEmoji3: null,
  brandEmoji4: null,
  brandEmoji5: null,
  country: {
      name: "United States of America", 
      code: "US", 
      capital: "Washington, D.C.", 
      region: "Americas", 
      latlng: [38, -97]
  },  
  wantsGraphics: true,
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
