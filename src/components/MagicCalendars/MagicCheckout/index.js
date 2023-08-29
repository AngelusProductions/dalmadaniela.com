import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ColorPicker, useColor } from "react-color-palette"
import "react-color-palette/css"
import EmojiPicker, {
  SkinTones,
  Theme,
  SuggestionMode,
  SkinTonePickerLocation
} from "emoji-picker-react"
import Toggle from 'react-toggle'
import { ReactCountryDropdown } from 'react-country-dropdown'
import 'react-country-dropdown/dist/index.css'
import { Uploader } from "uploader"
import { UploadDropzone } from "react-uploader"

import HomeIcon from '../../UI/HomeIcon'
import BackIcon from '../../UI/BackIcon'

import { i } from '../../../constants/data/assets'
import { paths } from '../../../constants/paths'
import { setMagicSpeed } from '../../../actions/magicCalendars'
import { checkoutMagicCalendar } from '../../../api/magicCalendars'

import t from './text.js'
import { getMagicGPTPrompt } from './prompts.js'
import './styles/index.scss'

const emojiPickerProps = {
    autoFocusSearch: false,
    theme: Theme.DARK,
    skinTonePickerLocation: SkinTonePickerLocation.PREVIEW,
    lazyLoadEmojis: true,
    suggestedEmojisMode: SuggestionMode.RECENT,
    searchPlaceHolder: "What does your brand feel like?",
    defaultSkinTone: SkinTones.NEUTRAL,
}

const uploader = Uploader({
  apiKey: "free"
})

const MagicCheckout = ({ magicSpeed, setMagicSpeed }) => {
  const [brandName, setBrandName] = useState('Angelus Productions')
  const [website, setWebsite] = useState('angelusproductions.com')
  const [socialMedia1, setSocialMedia1] = useState('https://www.instagram.com/corey.angelus/')
  const [socialMedia2, setSocialMedia2] = useState('')
  const [description, setDescription] = useState('We are a software development and music production company')
  const [objective, setObjective] = useState('My objective is to gain more followers.')

  const [brandColor1, setBrandColor1] = useColor('#ffffff')
  const [brandColor2, setBrandColor2] = useColor('#ffffff')
  const [brandColor3, setBrandColor3] = useColor('#ffffff')
  const [brandColor4, setBrandColor4] = useColor('#ffffff')
  const [brandColor5, setBrandColor5] = useColor('#ffffff')
  const [changedBrandColors, setChangedBrandColors] = useState({
    one: false, two: false, three: false, four: false, five: false
  })

  const [brandEmoji1, setBrandEmoji1] = useState(null)
  const [brandEmoji2, setBrandEmoji2] = useState(null)
  const [brandEmoji3, setBrandEmoji3] = useState(null)
  const [brandEmoji4, setBrandEmoji4] = useState(null)
  const [brandEmoji5, setBrandEmoji5] = useState(null)

  const [specificTopics, setSpecificTopics] = useState('I want to make jokes and talk about music production')

  const [useHolidays, setUseHolidays] = useState(false)
  const [country, setCountry] = useState({
    name: "United States of America", 
    code: "US", 
    capital: "Washington, D.C.", 
    region: "Americas", 
    latlng: [38, -97]
  })
  
  const [wantsGraphics, setWantsGraphics] = useState(false)
  const [graphics, setGraphics] = useState([])

  const [email, setEmail] = useState('angelusproductions@gmail.com')

  const onSubmitClick = async () => {
    let brandColors = [brandColor1.hex]
    const brandColorTuples =  [[brandColor2, 'two'], [brandColor3, 'three'], [brandColor4, 'four'], [brandColor5, 'five']]
    brandColorTuples.forEach(([brandColor, order]) => {
      if(changedBrandColors[order]) {
        brandColors.push(brandColor.hex)
      }
    })

    const brandEmojis = [brandEmoji1, brandEmoji2, brandEmoji3, brandEmoji4, brandEmoji5]
      .filter(emoji => emoji !== null).map(e => e.emoji)

    const magicGPTPrompt = getMagicGPTPrompt(
      magicSpeed, brandName, website, socialMedia1, socialMedia2, description, objective,
      brandColors, brandEmojis, specificTopics, useHolidays, country, wantsGraphics, graphics, email
    )
    
    const checkoutResponse = await checkoutMagicCalendar({ prompt: magicGPTPrompt })
    debugger
  }

  return (
    <main id='magicCheckoutPage'>
      <HomeIcon />
      <BackIcon path={paths.magicCalendars.page} />
      
      <h1>{t.title}</h1>
      <img id='magicCheckoutMagic' src={i.stars.starSwirl} />
      <div id='magicCheckoutMagicSpeedsContainer'>
        <label>{t.yourMagicSpeed}</label>
        <div id='magicCheckoutMagicSpeedsList'>
          <button 
            onClick={() => setMagicSpeed('standard')}
            className={`magicSpeedButton ${magicSpeed === 'standard' ? 'active' : 'inactive'} clickable`}
          >{t.magicSpeeds.standard}</button>
          <button 
            onClick={() => setMagicSpeed('fast')}
            className={`magicSpeedButton ${magicSpeed === 'fast' ? 'active' : 'inactive'} clickable`}
          >{t.magicSpeeds.fast}</button>
          <button 
            onClick={() => setMagicSpeed('superfast')}
            className={`magicSpeedButton ${magicSpeed === 'superfast' ? 'active' : 'inactive'} clickable`}
          >{t.magicSpeeds.superFast}</button>
        </div>
      </div>
      <div id='magicCheckoutQuestionsContainer'>
        <div className='magicCheckoutQuestionContainer'>
          <h2>1</h2>
          <h3>{t.questions.one.intro}</h3>
          <label>{t.questions.one.question}</label>
          <input className='magicCheckoutInput' value={brandName} onChange={e => setBrandName(e.target.value)} />
        </div>
        <div className='magicCheckoutQuestionContainer'>
          <h2>2</h2>
          <h3>{t.questions.two.question}</h3>
          <div className='magicCheckoutForm'>
            <label>{t.questions.two.websiteLabel}</label>
            <input className='magicCheckoutInput' value={website} onChange={e => setWebsite(e.target.value)} />
          </div>
          <div className='magicCheckoutForm'>
            <label>{t.questions.two.socialMediaLabel1}</label>
            <input className='magicCheckoutInput' value={socialMedia1} onChange={e => setSocialMedia1(e.target.value)} />
          </div>
          <div className='magicCheckoutForm'>
            <label>{t.questions.two.socialMediaLabel1}</label>
            <input className='magicCheckoutInput' value={socialMedia2} onChange={e => setSocialMedia2(e.target.value)} />
          </div>
        </div>
        <div className='magicCheckoutQuestionContainer'>
          <h2>3</h2>
          <h3>{t.questions.three.question}</h3>
          <label>{t.questions.three.helper}</label>
          <textarea className='magicCheckoutInput' value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <div className='magicCheckoutQuestionContainer'>
          <h2>4</h2>
          <h3>{t.questions.four.question}</h3>
          <textarea className='magicCheckoutInput' value={objective} onChange={e => setObjective(e.target.value)} />
        </div>
        <div className='magicCheckoutQuestionContainer'>
          <h2>5</h2>
          <h3>{t.questions.five.question}</h3>
          <div id='magicCheckoutColorPickersContainer'>
            <ColorPicker color={brandColor1} onChange={brandColor => {
              setChangedBrandColors({
                ...changedBrandColors, 
                one: true
              })
              setBrandColor1(brandColor)
            }} />
            {changedBrandColors.one && <ColorPicker color={brandColor2} onChange={brandColor => {
              setChangedBrandColors({
                ...changedBrandColors, 
                two: true
              })
              setBrandColor2(brandColor)
            }}/>}
            {changedBrandColors.two && <ColorPicker color={brandColor3} onChange={brandColor => {
              setChangedBrandColors({
                ...changedBrandColors, 
                three: true
              })
              setBrandColor3(brandColor)
            }}/>}
            {changedBrandColors.three && <ColorPicker color={brandColor4} onChange={brandColor => {
              setChangedBrandColors({
                ...changedBrandColors, 
                four: true
              })
              setBrandColor4(brandColor)
            }}/>}
            {changedBrandColors.four && <ColorPicker color={brandColor5} onChange={brandColor => {
              setChangedBrandColors({
                ...changedBrandColors, 
                five: true
              })
              setBrandColor5(brandColor)
            }}/>}
          </div>
        </div>
        <div className='magicCheckoutQuestionContainer'>
          <h2>6</h2>
          <label>{t.questions.six.question}</label>
          <div id='magicCheckoutEmojiPickersContainer'>
            <div id='magicCheckoutEmojiSelectionsContainer'>
              {brandEmoji1 && <img src={brandEmoji1.getImageUrl()} />}
              {brandEmoji2 && <img src={brandEmoji2.getImageUrl()} />}
              {brandEmoji3 && <img src={brandEmoji3.getImageUrl()} />}
              {brandEmoji4 && <img src={brandEmoji4.getImageUrl()} />}
              {brandEmoji5 && <img src={brandEmoji5.getImageUrl()} />}
            </div>
            <div id='magicCheckoutEmojiPickersContainer'>
              <EmojiPicker onEmojiClick={emoji => setBrandEmoji1(emoji)} {...emojiPickerProps} />
              {brandEmoji1 && <EmojiPicker onEmojiClick={emoji => setBrandEmoji2(emoji)} {...emojiPickerProps} />}
              {brandEmoji1 && brandEmoji2 && <EmojiPicker onEmojiClick={emoji => setBrandEmoji3(emoji)} {...emojiPickerProps} />}
              {brandEmoji1 && brandEmoji2 && brandEmoji3 && <EmojiPicker onEmojiClick={emoji => setBrandEmoji4(emoji)} {...emojiPickerProps} />}
              {brandEmoji1 && brandEmoji2 && brandEmoji3 && brandEmoji4 && <EmojiPicker onEmojiClick={emoji => setBrandEmoji5(emoji)} {...emojiPickerProps} />}
            </div>
          </div>
        </div>
        <div className='magicCheckoutQuestionContainer'>
          <h2>7</h2>
          <label>{t.questions.seven.question}</label>
          <textarea className='magicCheckoutInput' value={specificTopics} onChange={e => setSpecificTopics(e.target.value)} />
        </div>
        <div className='magicCheckoutQuestionContainer'>
          <h2>8</h2>
          <label>{t.questions.eight.question}</label>
          <Toggle
            id='toggleUseHolidays'
            defaultChecked={false}
            onChange={() => setUseHolidays(!useHolidays)} 
          />
          {useHolidays && (
            <ReactCountryDropdown onSelect={country => setCountry(country)} />
          )}
        </div>
        <div className='magicCheckoutQuestionContainer'>
          <h2>9</h2>
          <h3>{t.questions.nine.question}</h3>
          <label>{t.questions.nine.helper}</label>
          <div id='magicCheckoutWantGraphicsContainer'>
            <label>{t.questions.nine.graphics}</label>
            <Toggle
              id='toggleWantGraphics'
              defaultChecked={false}
              onChange={() => setWantsGraphics(!wantsGraphics)} 
            />
          </div>
          {!wantsGraphics && (
            <UploadDropzone 
              uploader={uploader}
              options={{ multi: true }}
              onUpdate={files => setGraphics(files)}
              width="600px"
              height="375px" 
            />
          )}
        </div>
        <div className='magicCheckoutQuestionContainer'>
          <h2>10</h2>
          <label>{t.questions.ten.question}</label>
          <input className='magicCheckoutInput' value={email} onChange={e => setEmail(e.target.value)} />
        </div>
      </div>
      <button 
        id='magicCheckoutSubmitButton' 
        className='clickable'
        onClick={onSubmitClick}
      >
        {t.cta}
      </button>
    </main>
  )
}

const mapState = state => {
  return {
    magicSpeed: state.magicCalendars.magicSpeed
  }
}

const mapDispatch = dispatch => ({
  setMagicSpeed: async speed => {
    dispatch(setMagicSpeed(speed))
  }
})

export default connect(mapState, mapDispatch)(MagicCheckout)
