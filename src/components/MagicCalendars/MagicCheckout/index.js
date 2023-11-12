import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'

import BackIcon from '../../UI/BackIcon/index.js'

import { paths } from '../../../constants/paths.js'
import { i } from '../../../constants/data/assets.js'
import { setMagicLength } from '../../../actions/magicCalendars.js'
import { createMagicCalendar, saveGraphic } from '../../../api/magicCalendars.js'

import t from './text.js'
import './styles/index.scss'

const MagicCheckout = ({ 
  brandName,
  website,
  socialMedia1,
  socialMedia2,
  description,
  objective,
  brandColor1,
  brandColor2,
  brandColor3,
  brandColor4,
  brandColor5,
  brandEmoji1,
  brandEmoji2,
  brandEmoji3,
  brandEmoji4,
  brandEmoji5,
  specificTopics,
  useHolidays,
  country,
  createFromScratch,
  graphics,
  styleId,
  email,
  magicSpeed
}) => {
  const navigate = useNavigate()
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

  return (
    <main id='magicCheckoutPage'>
      <BackIcon text pink path={paths.magicCalendars.review} />
      
      <div id='magicCheckoutTitleSectionContainer'>
        <h1>{t.title}</h1>
        <div id='magicCheckoutTitleSectionWandContainer'>
          <img id='magicCheckoutTitleSectionWand' src={i.stock.wand} />
          <img id='magicCheckoutTitleSectionWandMagic' src={i.stars.starTwinklesLarge} />
        </div>
      </div>
    </main>
  )
}

const mapState = state => {
  return {
    brandName: state.magicCalendars.brandName,
    website: state.magicCalendars.website,
    socialMedia1: state.magicCalendars.socialMedia1,
    socialMedia2: state.magicCalendars.socialMedia2,
    description: state.magicCalendars.description,
    objective: state.magicCalendars.objective,
    brandColor1: state.magicCalendars.brandColor1,
    brandColor2: state.magicCalendars.brandColor2,
    brandColor3: state.magicCalendars.brandColor3,
    brandColor4: state.magicCalendars.brandColor4,
    brandColor5: state.magicCalendars.brandColor5,
    brandEmoji1: state.magicCalendars.brandEmoji1,
    brandEmoji2: state.magicCalendars.brandEmoji2,
    brandEmoji3: state.magicCalendars.brandEmoji3,
    brandEmoji4: state.magicCalendars.brandEmoji4,
    brandEmoji5: state.magicCalendars.brandEmoji5,
    specificTopics: state.magicCalendars.specificTopics,
    useHolidays: state.magicCalendars.useHolidays,
    country: state.magicCalendars.country,
    createFromScratch: state.magicCalendars.createFromScratch,
    graphics: state.magicCalendars.graphics,
    styleId: state.magicCalendars.styleId,
    email: state.magicCalendars.email
  }
}

const mapDispatch = dispatch => ({
  setMagicLength: async length => {
    dispatch(setMagicLength(length))
  }
})

export default connect(mapState, mapDispatch)(MagicCheckout)
