import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { paths } from '../../../constants/paths'
import { setMagicValues } from '../../../actions/magicCalendars'
import { i } from '../../../constants/data/assets'

import t from './text'
import './styles/index.scss'

const ProgressProvider = ({ valueStart, valueEnd, children }) => {
  const [value, setValue] = useState(valueStart);
  useEffect(() => {
    setValue(valueEnd);
  }, [valueEnd]);

  return children(value);
};

const MagicForm = ({ 
  brandName,
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

        <div id='magicFormProgressBarContainer'>
          <ProgressProvider id='magicFormProgressBarContainer' valueStart={0} valueEnd={(questionNumber / 10) * 100}>
            {value => (
              <CircularProgressbar
                id='magicFormProgressBar'
                value={value} 
                text={`${value}%`}
                strokeWidth={8}
                style={buildStyles({
                  strokeLinecap: 'butt',
                  pathTransitionDuration: 0.5,
                  pathColor: `#56c035`,
                  textColor: '#f88',
                  trailColor: '#56c035',
                  backgroundColor: '#56c035',
                })}
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
    brandName: state.magicCalendars.brandName
  }
}

const mapDispatch = dispatch => ({
  setMagicValues: async valuePairs => {
    dispatch(setMagicValues(valuePairs))
  }
})

export default connect(mapState, mapDispatch)(MagicForm)
