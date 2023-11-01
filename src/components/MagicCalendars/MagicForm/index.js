import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import Toggle from 'react-toggle'
import ReactFlagsSelect from "react-flags-select"
import { Uploader } from "uploader"
import { UploadDropzone } from "react-uploader"

import MagicColorPicker from './MagicColorPicker'
import MagicEmojiPicker from './MagicEmojiPicker'

import { paths } from '../../../constants/paths'
import { setMagicValues } from '../../../actions/magicCalendars'
import { i } from '../../../constants/data/assets'

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
  setMagicValues
}) => {
  const navigate = useNavigate()
  const { question } = useParams()
  const [questionNumber, setQuestionNumber] = useState(parseInt(question))

  useEffect(() => {
    setQuestionNumber(parseInt(question))
  }, [question])

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
            </div>
            
            <input type='file' name='file' onChange={handleFileChange}/>

            {/* {!createFromScratch && (
                <UploadDropzone 
                  uploader={graphicUploader}
                  options={{ multi: true }}
                  onUpdate={graphics => {
                    debugger
                    setMagicValues({ graphics })
                  }}
                  width="100%"
                  height="100%" 
                />
            )} */}
          </div>
          <img className='magicQuestionImage' src={i.magicCalendars.questions.question9} />
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
            setQuestionNumber(questionNumber - 1)
            navigate(`${paths.magicCalendars.page}/form/${questionNumber - 1 }`)
          }}
        >Take Me Back</button>
      )}
      {questionNumber !== 10 && (
        <button 
          id='magicFormNextButton' className='magicButton clickable' 
          onClick={() => {
            setQuestionNumber(questionNumber + 1)
            navigate(`${paths.magicCalendars.page}/form/${questionNumber + 1 }`)
          }}
        >Next Question</button>
      )}
      {questionNumber === 10 && (
        <button id='magicFormCheckoutButton' className='clickable' 
        ><Link to={paths.magicCalendars.checkout}>Review in Magic Checkout</Link></button>
      )}
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
  }
}

const mapDispatch = dispatch => ({
  setMagicValues: async valuePairs => {
    dispatch(setMagicValues(valuePairs))
  }
})

export default connect(mapState, mapDispatch)(MagicForm)
