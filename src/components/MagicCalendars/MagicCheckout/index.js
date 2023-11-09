import React, { useEffect, useState, useMemo } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router'

import Toggle from 'react-toggle'
import ReactFlagsSelect from "react-flags-select"
import { Uploader } from "uploader"
import { UploadButton } from "react-uploader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'

import BackIcon from '../../UI/BackIcon'
import MagicColorPicker from '../MagicColorPicker'
import MagicEmojiPicker from '../MagicEmojiPicker'

import { paths } from '../../../constants/paths'
import { i } from '../../../constants/data/assets'
import { isValidUrl, isValidEmail } from '../../../utils/validators'
import { setMagicLength, setMagicValues } from '../../../actions/magicCalendars'
import { createMagicCalendar, saveGraphic } from '../../../api/magicCalendars'

import t from './text.js'
import './styles/index.scss'

const graphicUploader = Uploader({
  apiKey: "public_W142iDU3ThB1F3k2tafDxn6HUtYJ"
})

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
  magicSpeed, 
  setMagicValues
}) => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  const Error = ({ type }) => {
    return errors && errors[type] && (
    <h4 className='magicCheckoutError'>{errors[type]}</h4>
  )}

  const getErrors = () => {
    let newErrors = { ...errors }
    const isSocialMediaError = (socialMedia1.length === 0 && socialMedia2.length === 0)
          || (socialMedia1.length > 0 && !isValidUrl(socialMedia1)) 
          || (socialMedia2.length > 0 && !isValidUrl(socialMedia2)) 
    
    newErrors['brandName'] = brandName ? null : t.questions.one.error
    newErrors['website'] = !website || !isValidUrl(website) ? t.questions.two.error : null
    newErrors['socialMedia'] = isSocialMediaError ? t.questions.three.error : null
    newErrors['description'] = !description ? t.questions.four.error : null
    newErrors['objective'] = !objective ? t.questions.five.error : null
    newErrors['brandColors'] = !brandColor1 && !brandColor2 && !brandColor3 && !brandColor4 && !brandColor5 ? t.questions.six.error : null
    newErrors['brandEmojis'] = !brandEmoji1 && !brandEmoji2 && !brandEmoji3 && !brandEmoji4 && !brandEmoji5 ? t.questions.seven.error : null
    newErrors['specificTopics'] = !specificTopics ? t.questions.eight.error : null
    newErrors['graphics'] = !createFromScratch && graphics.length === 0 ? t.questions.nine.error : null
    newErrors['email'] = !email || !isValidEmail(email) ? t.questions.ten.error : null

    return newErrors
  }

  useEffect(() => {9
    setErrors(getErrors())
  }, [
      brandName, website, socialMedia1, socialMedia2, description, objective, 
      brandColor1, brandColor2, brandColor3, brandColor4, brandColor5, brandEmoji1, 
      brandEmoji2, brandEmoji3, brandEmoji4, brandEmoji5, specificTopics, useHolidays, 
      country, createFromScratch, graphics, styleId, email
  ])

  
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
      <BackIcon text pink path={`${paths.magicCalendars.page}/form/10`} />
      
      <div id='magicCheckoutTitleSectionContainer'>
        <h1>{t.title}</h1>
        <div id='magicCheckoutTitleSectionWandContainer'>
          <img id='magicCheckoutTitleSectionWand' src={i.stock.wand} />
          <img id='magicCheckoutTitleSectionWandMagic' src={i.stars.starTwinklesLarge} />
        </div>
      </div>

      <div className='magicCheckoutQuestionsContainer'>
        <div className='magicCheckoutQuestion one'>
          <div className='magicCheckoutQuestionInputContainer'>
            <h2 className='magicCheckoutInputLabel'>{t.questions.one.label}</h2>
            <input 
              className='magicCheckoutInput' 
              value={brandName} 
              onChange={e => setMagicValues({ brandName:  e.target.value })} 
            />
            <Error type='brandName' />
          </div>
        </div>

        <div className='magicCheckoutQuestion two'>
          <div className='magicCheckoutQuestionInputContainer'>
            <h2 className='magicCheckoutInputLabel'>{t.questions.two.label}</h2>
            <input 
              className='magicCheckoutInput' 
              value={website} 
              onChange={e => setMagicValues({ website:  e.target.value })} 
            />
            <Error type='website' />
          </div>
        </div>

        <div className='magicCheckoutQuestion three'>
          <div className='magicCheckoutQuestionInputContainer'>
            <h2>{t.questions.three.label1}</h2>
            <input 
              className='magicCheckoutInput' 
              value={socialMedia1} 
              onChange={e => setMagicValues({ socialMedia1:  e.target.value })} 
            />
          </div>
          <br />
          <div className='magicCheckoutQuestionInputContainer'>
            <h2>{t.questions.three.label2}</h2>
            <input 
              className='magicCheckoutInput' 
              value={socialMedia2} 
              onChange={e => setMagicValues({ socialMedia2:  e.target.value })} 
            />
            <Error type='socialMedia' />
          </div>
        </div>

        <div className='magicCheckoutQuestion four'>
          <div className='magicCheckoutQuestionInputContainer'>
            <h2>{t.questions.four.label}</h2>
            <textarea 
              className='magicCheckoutTextarea' 
              value={description} 
              onChange={e => setMagicValues({ description:  e.target.value })} 
            />
            <Error type='description' />
          </div>
        </div>

        <div className='magicCheckoutQuestion five'>
          <div className='magicCheckoutQuestionInputContainer'>
            <h2>{t.questions.five.label}</h2>
            <textarea 
              className='magicCheckoutTextarea' 
              value={objective} 
              onChange={e => setMagicValues({ objective:  e.target.value })} 
            />
            <Error type='objective' />
          </div>
        </div>

        <div className='magicCheckoutQuestion six'>
          <div className='magicCheckoutQuestionInputContainer'>
            <h2>{t.questions.six.label}</h2>
            <div id='magicCheckoutColorPickersContainer'>
              <MagicColorPicker 
                color={brandColor1} 
                onColorClick={c => setMagicValues({ brandColor1: c.hex })}
                onColorClear={() => setMagicValues({ brandColor1: null })}
              />
              <MagicColorPicker 
                color={brandColor2} 
                onColorClick={c => setMagicValues({ brandColor2: c.hex })}
                onColorClear={() => setMagicValues({ brandColor2: null })}
              />
              <MagicColorPicker 
                color={brandColor3} 
                onColorClick={c => setMagicValues({ brandColor3: c.hex })}
                onColorClear={() => setMagicValues({ brandColor3: null })}
              />
              <MagicColorPicker 
                color={brandColor4} 
                onColorClick={c => setMagicValues({ brandColor4: c.hex })}
                onColorClear={() => setMagicValues({ brandColor4: null })}
              />
              <MagicColorPicker 
                color={brandColor5} 
                onColorClick={c => setMagicValues({ brandColor5: c.hex })}
                onColorClear={() => setMagicValues({ brandColor5: null })}
              />
            </div>
            <Error type='brandColors' />
          </div>
        </div>

        <div className='magicCheckoutQuestion seven'>
          <div className='magicCheckoutQuestionInputContainer'>
            <h2>{t.questions.seven.label}</h2>
            <div id='magicCheckoutEmojiPickersContainer'>
              <MagicEmojiPicker 
                emoji={brandEmoji1} 
                onEmojiClick={e => setMagicValues({ brandEmoji1: e })}
                onEmojiClear={() => setMagicValues({ brandEmoji1: null })}
              />
              <MagicEmojiPicker 
                emoji={brandEmoji2} 
                onEmojiClick={e => setMagicValues({ brandEmoji2: e })}
                onEmojiClear={() => setMagicValues({ brandEmoji2: null })}
              />
              <MagicEmojiPicker 
                emoji={brandEmoji3} 
                onEmojiClick={e => setMagicValues({ brandEmoji3: e })}
                onEmojiClear={() => setMagicValues({ brandEmoji3: null })}
              />
              <MagicEmojiPicker 
                emoji={brandEmoji4} 
                onEmojiClick={e => setMagicValues({ brandEmoji4: e })}
                onEmojiClear={() => setMagicValues({ brandEmoji4: null })}
              />
              <MagicEmojiPicker 
                emoji={brandEmoji5} 
                onEmojiClick={e => setMagicValues({ brandEmoji5: e })}
                onEmojiClear={() => setMagicValues({ brandEmoji5: null })}
              />
            </div>
            <Error type='brandEmojis' />
          </div>
        </div>

        <div className='magicCheckoutQuestion eight'>
          <div className='magicCheckoutQuestionInputContainer'>  
            <h2>{t.questions.eight.label1}</h2>
            <textarea 
              className='magicCheckoutTextarea' 
              value={specificTopics} 
              onChange={e => setMagicValues({ specificTopics:  e.target.value })} 
            />
          </div>
          <Error type='specificTopics' />
          <div className='magicCheckoutQuestionInputContainer'>  
            <h2>{t.questions.eight.label2}</h2>
            <div id='magicCheckoutQuestionEightToggleContainer'>
              <Toggle
                id='toggleUseHolidays'
                onChange={() => setMagicValues({ useHolidays:  !useHolidays })} 
                defaultChecked={useHolidays}
              />
              {useHolidays && (
                  <ReactFlagsSelect
                    selected={country}
                    onSelect={(code) => setMagicValues({ country: code })}
                  />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className='magicCheckoutQuestion nine'>
        <div className='magicCheckoutQuestionInputContainer'>
          <h2>{t.questions.nine.label1}</h2>
          <div id='magicCheckoutQuestionNineToggleContainer'>
              <Toggle
                id='toggleCreateFromScratch'
                onChange={() => setMagicValues({ createFromScratch: !createFromScratch })} 
                defaultChecked={createFromScratch}
              />
              {!createFromScratch && graphics.length < 6 && (
                <UploadButton 
                  uploader={graphicUploader}
                  options={{ 
                    multi: true, 
                    maxFileCount: 6 - graphics.length,
                    maxFileSizeBytes: 524288000,
                    mimeTypes: ['image/*', 'video/*']
                  }}
                  onComplete={newGraphics => {
                    const existingUploadIds = graphics.map(g => g.originalFile.metadata.uploadId)
                    newGraphics = newGraphics.filter(g => !existingUploadIds.includes(g.originalFile.metadata.uploadId))
                    setMagicValues({ graphics: [...graphics, ...newGraphics] })
                  }}
                  width="100%"
                  height="100%" 
                >
                  {({ onClick }) => <button onClick={onClick} className='clickable'>
                    {t.questions.nine.upload}
                  </button>}
                </UploadButton>
            )}
          </div>
        </div>
        <div className='magicCheckoutQuestionInputContainer'>
          {!createFromScratch && <h2>{t.questions.nine.label2}</h2>}
          {!createFromScratch && (
            <div id='magicCheckoutGraphicsContainer'>
              {graphics.map(g => {
                return (
                  <div key={g.originalFile.metadata.uploadId} className='magicCheckoutGraphicContainer'>
                    {g.originalFile.mime.includes('image') && <img src={g.fileUrl} />}
                    {g.originalFile.mime.includes('video') && <video src={g.fileUrl} />}
                    <h4>
                      {g.originalFile.originalFileName.slice(0, 15)}
                      {g.originalFile.originalFileName.length > 15 && '...'}
                    </h4>
                    <FontAwesomeIcon 
                      icon={faClose} 
                      color={'#DA2A7D'} 
                      className='magicCheckoutGraphicCloseIcon clickable' 
                      onClick={() => {
                        setMagicValues({ graphics: graphics.filter(graphic => 
                        graphic.originalFile.metadata.uploadId !== g.originalFile.metadata.uploadId) 
                      })}}
                    />
                  </div>
                )
              })}
              <Error type='graphics' />
            </div>
          )}
        </div>
      </div>
{/* 
      <button 
        id='magicCheckoutSubmitButton' 
        className='clickable'
        onClick={onSubmitClick}
      >
        {t.cta}
      </button>

      {status && <p id='magicCheckoutStatus'>{status}</p>} */}
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
  setMagicValues: async valuePairs => {
    dispatch(setMagicValues(valuePairs))
  }
})

export default connect(mapState, mapDispatch)(MagicCheckout)
