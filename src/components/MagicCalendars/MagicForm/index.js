import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'

import MagicQuestion from '../MagicQuestion'

import { paths } from '../../../constants/paths'
import { setMagicValues } from '../../../actions/magicCalendars'
import { i } from '../../../constants/data/assets'

import t from './text'
import './styles/index.scss'

const MagicForm = ({ 
  brandName,
  setMagicValues
}) => {
  const navigate = useNavigate()
  const [questionNumber, setQuestionNumber] = useState(1)

  return (
    <main id='magicFormContainer'>
      <div id='magicFormTitleContainer'>
        <h1>{t.title}</h1>
        <img id='magicFormTitleWand' src={i.stock.wand} />
        <img id='magicFormTitleWandMagic' src={i.stars.starTwinklesLarge} />
      </div>
      {questionNumber === 1 && (
        <div className='magicQuestion one'>
          <h2>{t.questions.one.intro}</h2>
          <h3>{t.questions.one.question}</h3>
          <input 
            className='magicFormInput' 
            value={brandName} 
            onChange={e => setMagicValues({ brandName:  e.target.value })} />
        </div>
      )}

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
