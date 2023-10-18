import React, { useEffect, useState, useMemo } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'
import { ColorPicker, useColor } from "react-color-palette"
import "react-color-palette/css"
import EmojiPicker, {
  SkinTones,
  Theme,
  SuggestionMode,
  SkinTonePickerLocation
} from "emoji-picker-react"
import Toggle from 'react-toggle'
import { Uploader } from "uploader"
import { UploadDropzone } from "react-uploader"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { CountryDropdown } from 'react-country-region-selector';

import UserInfo from '../../Auth/UserInfo'
import BackIcon from '../../UI/BackIcon'

import { paths } from '../../../constants/paths'
import { i } from '../../../constants/data/assets'
import { adminEmails } from '../../../constants/data/admins'
import { setMagicSpeed } from '../../../actions/magicCalendars'
import { createMagicCalendar, saveGraphic } from '../../../api/magicCalendars'

import t from './text.js'
import './styles/index.scss'

const emojiPickerProps = {
    autoFocusSearch: false,
    theme: Theme.DARK,
    skinTonePickerLocation: SkinTonePickerLocation.PREVIEW,
    lazyLoadEmojis: true,
    suggestedEmojisMode: SuggestionMode.RECENT,
    searchPlaceHolder: "What does your brand feel like?",
    defaultSkinTone: SkinTones.NEUTRAL,
    width: '75%',
    height: '400px'
}

const uploader = Uploader({
  apiKey: "public_W142iDU3ThB1F3k2tafDxn6HUtYJ"
})

const MagicCheckout = ({ magicSpeed, currentUser }) => {
  const navigate = useNavigate()
  
  const [brandName, setBrandName] = useState('')
  const [website, setWebsite] = useState('')
  const [socialMedia1, setSocialMedia1] = useState('')
  const [socialMedia2, setSocialMedia2] = useState('')
  const [description, setDescription] = useState('')
  const [objective, setObjective] = useState('')

  const [brandColor1, setBrandColor1] = useColor('#ffffff')
  const [brandColor2, setBrandColor2] = useColor('#ffffff')
  const [brandColor3, setBrandColor3] = useColor('#ffffff')
  const [brandColor4, setBrandColor4] = useColor('#ffffff')
  const [brandColor5, setBrandColor5] = useColor('#ffffff')

  const [brandEmoji1, setBrandEmoji1] = useState(null)
  const [brandEmoji2, setBrandEmoji2] = useState(null)
  const [brandEmoji3, setBrandEmoji3] = useState(null)
  const [brandEmoji4, setBrandEmoji4] = useState(null)
  const [brandEmoji5, setBrandEmoji5] = useState(null)

  const [specificTopics, setSpecificTopics] = useState('')

  const [useHolidays, setUseHolidays] = useState(true)
  const [country, setCountry] = useState('United States')
  
  const [wantsGraphics, setWantsGraphics] = useState(true)
  const [graphics, setGraphics] = useState(t.test.graphics)

  const [styleId, setStyleId] = useState(3)

  const [email, setEmail] = useState('')

  const [status, setStatus] = useState(null)

  const onSubmitClick = async () => {
    let brandColors = [brandColor1.hex, brandColor2.hex, brandColor3.hex, brandColor4.hex, brandColor5.hex]

    const brandEmojis = [brandEmoji1, brandEmoji2, brandEmoji3, brandEmoji4, brandEmoji5]
      .filter(emoji => emoji !== null).map(e => e.emoji)
    
    const style = t.questions.ten.options.find(o => o.id === styleId)
    
    setStatus("Creating your calendar.")
    
    const { magicCalendarId } = await createMagicCalendar({
      calendar: {
        email,
        brandName,
        magicSpeed,
        chatGPTResponse: null,
        website,
        socialMedia1,
        socialMedia2,
        description,
        objective,
        brandColors: brandColors.join(','),
        brandEmojis: brandEmojis.join(','),
        specificTopics,
        useHolidays,
        country,
        wantsGraphics,
        style: style.name
      }
    })

    setStatus("Uploading your graphics.")

    graphics.forEach(({ fileUrl }) => {
      saveGraphic({
        fileUrl,
        magicCalendarId
      })
    })

    setStatus("Magic Calendar Created.")
  }

  useEffect(() => {
    if(!currentUser.email) {
      navigate(`${paths.auth.login}?redirect=${paths.magicCalendars.checkout}`)
    }
  })

  return currentUser.email && adminEmails.includes(currentUser?.email) && (
    <main id='magicCheckoutPage'>
      <UserInfo />
      <BackIcon text pink path={paths.magicCalendars.page} />
      <h1>{t.title}</h1>
      <div id='magicCheckoutTitleSectionWandContainer'>
        <img id='magicCheckoutTitleSectionWand' src={i.stock.wand} />
        <img id='magicCheckoutTitleSectionWandMagic' src={i.stars.starTwinklesLarge} />
      </div>
      <div id='magicCheckoutQuestionsContainer'>
        <div className='magicCheckoutQuestionContainer one'>
          <h2>{t.questions.one.intro}</h2>
          <div id='magicCheckoutQuestionOneInputContainer'>
            <h2>{t.questions.one.question}</h2>
            <input className='magicCheckoutInput' value={brandName} onChange={e => setBrandName(e.target.value)} />
          </div>
        </div>
        <div className='magicCheckoutQuestionContainer two'>
          <h2>{t.questions.two.question1}</h2>
          <input className='magicCheckoutInput' value={website} onChange={e => setWebsite(e.target.value)} />
          <h2>{t.questions.two.question2}</h2>
          <input className='magicCheckoutInput' value={socialMedia1} onChange={e => setSocialMedia1(e.target.value)} />
          <input className='magicCheckoutInput' value={socialMedia2} onChange={e => setSocialMedia2(e.target.value)} />
        </div>
        <div className='magicCheckoutQuestionContainer three'>
          <h2>{t.questions.three.question}</h2>
          <h2>{t.questions.three.helper}</h2>
          <textarea className='magicCheckoutTextArea' value={description} onChange={e => setDescription(e.target.value)} />
        </div>
        <div className='magicCheckoutQuestionContainer four'>
          <h2>{t.questions.four.question}</h2>
          <textarea className='magicCheckoutTextArea' value={objective} onChange={e => setObjective(e.target.value)} />
        </div>
        <div className='magicCheckoutQuestionContainer five'>
          <h2>{t.questions.five.question}</h2>
          <div id='magicCheckoutColorPickersContainer'>
            <ColorPicker color={brandColor1} onChange={brandColor => setBrandColor1(brandColor)} />
            <ColorPicker color={brandColor2} onChange={brandColor => setBrandColor2(brandColor)} />
            <ColorPicker color={brandColor3} onChange={brandColor => setBrandColor3(brandColor)} />
            <ColorPicker color={brandColor4} onChange={brandColor => setBrandColor4(brandColor)} />
            <ColorPicker color={brandColor5} onChange={brandColor => setBrandColor5(brandColor)} />
          </div>
        </div>
        <div className='magicCheckoutQuestionContainer six'>
          <h2>{t.questions.six.question}</h2>
          <div id='magicCheckoutEmojiPickersContainer'>
            <div className='magicEmojiPickerContainer'>
              <div className='magicEmojiContainer'>
                {brandEmoji1 && <img src={brandEmoji1.getImageUrl()} />}
              </div>
              <EmojiPicker onEmojiClick={emoji => setBrandEmoji1(emoji)} {...emojiPickerProps} />
            </div>
            <div className='magicEmojiPickerContainer'>
              <div className='magicEmojiContainer'>
                {brandEmoji2 && <img src={brandEmoji2.getImageUrl()} />}
              </div>
              <EmojiPicker onEmojiClick={emoji => setBrandEmoji2(emoji)} {...emojiPickerProps} />
            </div>
            <div className='magicEmojiPickerContainer'>
              <div className='magicEmojiContainer'>
                {brandEmoji3 && <img src={brandEmoji3.getImageUrl()} />}
              </div>
              <EmojiPicker onEmojiClick={emoji => setBrandEmoji3(emoji)} {...emojiPickerProps} />
            </div>
            <div className='magicEmojiPickerContainer'>
              <div className='magicEmojiContainer'>
                {brandEmoji4 && <img src={brandEmoji4.getImageUrl()} />}
              </div>
              <EmojiPicker onEmojiClick={emoji => setBrandEmoji4(emoji)} {...emojiPickerProps} />
            </div>
            <div className='magicEmojiPickerContainer'>
              <div className='magicEmojiContainer'>
                {brandEmoji5 && <img src={brandEmoji5.getImageUrl()} />}
              </div>
              <EmojiPicker onEmojiClick={emoji => setBrandEmoji5(emoji)} {...emojiPickerProps} />
            </div>
          </div>
        </div>
        <div className='magicCheckoutQuestionContainer seven'>
          <h2>{t.questions.seven.question}</h2>
          <textarea className='magicCheckoutTextArea' value={specificTopics} onChange={e => setSpecificTopics(e.target.value)} />
        </div>
        <div className='magicCheckoutQuestionContainer eight'>
          <div id='magicCheckoutQuestionEightContainer'>
            <h2>{t.questions.eight.question1}</h2>
            <Toggle
              id='toggleUseHolidays'
              defaultChecked={t.test.useHolidays}
              onChange={() => setUseHolidays(!useHolidays)} 
            />
          </div>
          {useHolidays && (
            <div id='magicCheckoutQuestionEightCountryContainer'>
              <h2>{t.questions.eight.question2}</h2>
              <CountryDropdown value={country} onChange={c => setCountry(c)} />
            </div>
          )}
        </div>
        <div className='magicCheckoutQuestionContainer nine'>
          <h2>{t.questions.nine.question}</h2>
          <h2>{t.questions.nine.helper}</h2>
          <div id='magicCheckoutWantGraphicsContainer'>
            <h2>{t.questions.nine.graphics}</h2>
            <Toggle
              id='toggleWantGraphics'
              defaultChecked={t.test.wantsGraphics}
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
        <div className='magicCheckoutQuestionContainer ten'>
          <h2>{t.questions.ten.question}</h2>
          <Select id='magicCheckoutStyleDropdown' value={styleId} onChange={e => setStyleId(e.target.value)}>
            {t.questions.ten.options.map(({ id, name }) => (
              <MenuItem key={id} value={id}>{name}</MenuItem>
            ))}
          </Select>
        </div>
        <div className='magicCheckoutQuestionContainer eleven'>
          <h2>{t.questions.eleven.question}</h2>
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
      {status && <p id='magicCheckoutStatus'>{status}</p>}
    </main>
  )
}

const mapState = state => {
  return {
    currentUser: state.currentUser,
    magicSpeed: state.magicCalendars.magicSpeed
  }
}

const mapDispatch = dispatch => ({
  setMagicSpeed: async speed => {
    dispatch(setMagicSpeed(speed))
  }
})

export default connect(mapState, mapDispatch)(MagicCheckout)
