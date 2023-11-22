import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Toggle from 'react-toggle'
import ReactFlagsSelect from "react-flags-select"
import { Uploader } from "uploader"
import { UploadButton } from "react-uploader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'

import MagicColorPicker from '../MagicColorPicker'
import MagicEmojiPicker from '../MagicEmojiPicker'

import { paths } from '../../../constants/paths'
import { setMagicValues } from '../../../actions/magicCalendars'
import { i } from '../../../constants/data/assets'
import { isValidUrl, isValidEmail } from '../../../utils/validators'

import t from './text'
import './styles/index.scss'

const graphicUploader = Uploader({
  apiKey: "public_W142iDU3ThB1F3k2tafDxn6HUtYJ"
})

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = useState(valueStart);
  useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
};

const MagicForm = ({ 
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
  setMagicValues
}) => {
  const navigate = useNavigate()
  const { question } = useParams()
  
  const [questionNumber, setQuestionNumber] = useState(parseInt(question))
  const [isErrorInitialized, setIsErrorInitialized] = useState(false)
  const [error, setError] = useState(null)

  const Error = () => isErrorInitialized && error && (
    <h4 className='magicFormError'>{error}</h4>
  )

  const getErrorText = () => {
    switch (questionNumber) {
      case 1:
        return !brandName ? t.questions.one.error : null
      case 2:
        return !website || !isValidUrl(website) ? t.questions.two.error : null
      case 3:
        const isError = (socialMedia1?.length === 0 && socialMedia2?.length === 0)
          || (socialMedia1?.length > 0 && !isValidUrl(socialMedia1)) 
          || (socialMedia2?.length > 0 && !isValidUrl(socialMedia2)) 
        return isError ? t.questions.three.error : null
      case 4:
        return !description ? t.questions.four.error : null
      case 5:
        return !objective ? t.questions.five.error : null
      case 6:
        return !brandColor1 && !brandColor2 && !brandColor3 && !brandColor4 && !brandColor5 ? t.questions.six.error : null
      case 7:
        return !brandEmoji1 && !brandEmoji2 && !brandEmoji3 && !brandEmoji4 && !brandEmoji5 ? t.questions.seven.error : null
      case 8:
        return !specificTopics ? t.questions.eight.error : null
      case 9:
        return !createFromScratch && graphics?.length === 0 ? t.questions.nine.error : null
      case 10:
        return !email || !isValidEmail(email) ? t.questions.ten.error : null
        default:
        return null
    }
  }

  useEffect(() => {
    setQuestionNumber(parseInt(question))
  }, [question])

  useEffect(() => {
    setError(getErrorText())
  }, [
      brandName, website, socialMedia1, socialMedia2, description, objective, 
      brandColor1, brandColor2, brandColor3, brandColor4, brandColor5, brandEmoji1, 
      brandEmoji2, brandEmoji3, brandEmoji4, brandEmoji5, specificTopics, useHolidays, 
      country, createFromScratch, graphics, styleId, email
  ])

  return (
    <main id='magicFormContainer'>
      <div id='magicFormTitleContainer'>
        <h1>{t.title}</h1>
        <img id='magicFormTitleWand' src={i.stock.wand} />
        <img id='magicFormTitleWandMagic' src={i.stars.starTwinklesLarge} />
      </div>

      {questionNumber === 1 && (
        <div className='magicQuestion one'>
          <div className='magicQuestionFormContainer one'>
            <h2>{t.questions.one.intro}</h2>
            <h3>{t.questions.one.question}</h3>
            <input 
              className='magicFormInput' 
              value={brandName} 
              onChange={e => setMagicValues({ brandName:  e.target.value })} 
            />
            <Error />
          </div>
          <img className='magicQuestionImage' src={i.magicCalendars.questions.question1} />
        </div>
      )}
      {questionNumber === 2 && (
        <div className='magicQuestion two'>
          <div className='magicQuestionFormContainer two'>
            <h2>{t.questions.two.question1}</h2>
            <h3>{t.questions.two.question2}</h3>
            <input 
              className='magicFormInput' 
              value={website} 
              onChange={e => setMagicValues({ website:  e.target.value })} 
            />
            <Error />          
          </div>
          <img className='magicQuestionImage' src={i.magicCalendars.questions.question2} />
        </div>
      )}
      {questionNumber === 3 && (
        <div className='magicQuestion three'>
          <div className='magicQuestionFormContainer three'>
            <h2>{t.questions.three.question}</h2>
            <input 
              className='magicFormInput' 
              value={socialMedia1} 
              onChange={e => setMagicValues({ socialMedia1:  e.target.value })} 
            />
            <input 
              className='magicFormInput' 
              value={socialMedia2} 
              onChange={e => setMagicValues({ socialMedia2:  e.target.value })} 
            />
            <Error />
          </div>
          <img className='magicQuestionImage' src={i.magicCalendars.questions.question3} />
        </div>
      )}
      {questionNumber === 4 && (
        <div className='magicQuestion four'>
          <div className='magicQuestionFormContainer four'>
            <h2>{t.questions.four.question1}</h2>
            <h2>{t.questions.four.question2}</h2>
            <h3>{t.questions.four.question3}</h3>
            <textarea 
              className='magicFormTextarea' 
              value={description} 
              onChange={e => setMagicValues({ description:  e.target.value })} 
            />
            <Error />
          </div>
          <img className='magicQuestionImage' src={i.magicCalendars.questions.question4} />
        </div>
      )}
      {questionNumber === 5 && (
        <div className='magicQuestion five'>
          <div className='magicQuestionFormContainer five'>
            <h2>{t.questions.five.question}</h2>
            <textarea 
              className='magicFormTextarea' 
              value={objective} 
              onChange={e => setMagicValues({ objective:  e.target.value })} 
            />
            <Error />
          </div>
          <img className='magicQuestionImage' src={i.magicCalendars.questions.question5} />
        </div>
      )}
      {questionNumber === 6 && (
        <div className='magicQuestion six'>
          <h2>{t.questions.six.question}</h2>
          <div id='magicFormColorPickersContainer'>
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
          <br/><br/>
          <Error />
        </div>
      )}
      {questionNumber === 7 && (
        <div className='magicQuestion seven'>
          <h2>{t.questions.seven.question}</h2>
          <div id='magicFormEmojiPickersContainer'>
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
          <br/><br/>
          <Error />
        </div>
      )}
      {questionNumber === 8 && (
        <div className='magicQuestion eight'>
          <div className='magicQuestionFormContainer eight'>
            <div className='magicFormQuestionEightContainer'>  
              <h2>{t.questions.eight.question1}</h2>
              <textarea 
                className='magicFormTextarea' 
                value={specificTopics} 
                onChange={e => setMagicValues({ specificTopics:  e.target.value })} 
              />
            </div>
            <div className='magicFormQuestionEightContainer'>  
              <h3>{t.questions.eight.question2}</h3>
              <div id='magicFormQuestionEightToggleContainer'>
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
            <br/><br/><br/><br/>
            <Error />
          </div>
          <img className='magicQuestionImage' src={i.magicCalendars.questions.question8} />
        </div>
      )}
      {questionNumber === 9 && (
        <div className='magicQuestion nine'>
          <div className='magicQuestionFormContainer nine'>
            <h2>{t.questions.nine.question1}</h2>
            <h3>
              {t.questions.nine.question2}
              <b>{t.questions.nine.question3}</b>
              {t.questions.nine.question4}
            </h3>
            <div id='magicFormQuestionNineToggleContainer'>
              <label>{t.questions.nine.createFromScratch}</label>
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
            {!createFromScratch && (
              <div id='magicFormGraphicsContainer'>
                {graphics.map(g => {
                  return (
                    <div key={g.originalFile.metadata.uploadId} className='magicFormGraphicContainer'>
                      {g.originalFile.mime.includes('image') && <img src={g.fileUrl} />}
                      {g.originalFile.mime.includes('video') && <video src={g.fileUrl} />}
                      <h4>
                        {g.originalFile.originalFileName.slice(0, 15)}
                        {g.originalFile.originalFileName.length > 15 && '...'}
                      </h4>
                      <FontAwesomeIcon 
                        icon={faClose} 
                        color={'#DA2A7D'} 
                        className='magicFormGraphicCloseIcon clickable' 
                        onClick={() => {
                          setMagicValues({ graphics: graphics.filter(graphic => 
                          graphic.originalFile.metadata.uploadId !== g.originalFile.metadata.uploadId) 
                        })}}
                      />
                    </div>
                  )
                })}
              </div>
            )}
            <br/><br/><br/>
            <Error />
          </div>
          <img className='magicQuestionImage' src={i.magicCalendars.questions.question9} />
        </div>
      )}
      {questionNumber === 10 && (
        <div className='magicQuestion ten'>
          <div className='magicQuestionFormContainer ten'>
            <h2>{t.questions.ten.question1}</h2>
            <div id='magicFormQuestionTenRadioContainer'>
             {t.questions.ten.options.map(o => (
                <Tooltip 
                  key={o.id}
                  className='styleTooltip'
                  title={o.tooltip}
                  position='bottom'
                  delay={300}
                  hideDelay={1000}
                  animation='perspective'
                  arrowSize='small'
                  stickyDuration={100}
                  theme='dark'
                  arrow
                  inertia
                  sticky
                  touchHold
                  size='regular'
                >
                <div className='magicFormQuestionTenRadio clickable' onClick={() => setMagicValues({ styleId: o.id })}> 
                  <input 
                    type='radio' 
                    value={o.id} 
                    checked={styleId === o.id} 
                    onChange={() => {}}
                  />
                  <label htmlFor={o.id}>{o.name}</label>  
                </div>
              </Tooltip>
             ))}
            </div>
            <h2>{t.questions.ten.question2}</h2>
            <input 
              className='magicFormInput' 
              value={email} 
              onChange={e => setMagicValues({ email:  e.target.value })} 
            />
            <br/><br/>
            <Error />
          </div>
          <img className='magicQuestionImage' src={i.magicCalendars.questions.question10} />
        </div>
      )}

      <div id='magicFormProgressBarContainer'>
        <ProgressProvider id='magicFormProgressBarContainer' valueStart={0} valueEnd={(questionNumber / 10) * 100}>
          {value => (
            <CircularProgressbar
              id='magicFormProgressBar'
              value={value} 
              text={`${value}%`}
            />
          )}
        </ProgressProvider>
      </div>

      {questionNumber !== 1 && (
        <button 
          id='magicFormBackButton' className='magicButton clickable' 
          onClick={() => {
            setError(null)
            setIsErrorInitialized(false)
            setQuestionNumber(questionNumber - 1)
            navigate(`${paths.magicCalendars.page}/form/${questionNumber - 1 }`)
          }}
        >Take Me Back</button>
      )}

      <button 
        id='magicFormNextButton' 
        className={`magicButton ${
          isErrorInitialized && error !== null ? 'disabled' : 'clickable'
        } ${questionNumber === 10 ? 'magicFormNextButtonReview' : ''}`}
        onClick={() => {
          const error = getErrorText()
          if(error) {
            setError(error)
            setIsErrorInitialized(true)
          }
          else {
            setError(null)
            setIsErrorInitialized(false)
            setQuestionNumber(questionNumber + 1)
            if(questionNumber === 10)
              navigate(`${paths.magicCalendars.checkout}`)
            else
              navigate(`${paths.magicCalendars.page}/form/${questionNumber + 1 }`)
          }
        }}
      >
        {questionNumber === 10 ? 'Review in Magic Checkout' : 'Next Question'}
      </button>
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

export default connect(mapState, mapDispatch)(MagicForm)
