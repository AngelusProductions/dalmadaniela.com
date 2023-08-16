import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { i } from '../../../constants/data/assets'
import './styles/index.scss'

const t = {
    faqShort: 'FAQ',
    faqLong: 'Frequenty Asked Questions',
    questions: {
        one: 'What is dalmadaniela.com?',
        two: 'What products & services cann I buy on dalmadaniela.com?',
        three: 'What are Magic Calendars?',
        four: 'Why should I get the SuperClass: How to be successful on social without having to go viral?',
        five: 'Why should I choose dalmadaniela.com?',
        six: "Where is dalmadaniela.com's expert digital marketing team located?"
    }
}

const FlashCard = ({ questionId, question, answer }) => {
    const [isFlipped, setIsFlipped] = useState(false)

    return (
        <div 
            key={questionId}
            id={`cardFlipContainer-${questionId}`} 
            isFlipped={isFlipped}
            className='cardFlipContainer'
            onClick={() => setIsFlipped(!isFlipped)}
        >
                <div 
                    id={`cardFlipQuestionContainer-${questionId}`}
                    className={`cardFlipQuestionContainer ${
                        isFlipped ? 'inactive' : 'active'
                    }`}
                >
                    <span>{question}</span>
                </div>
                <div 
                    id={`cardFlipAnswerContainer-${questionId}`}
                    className={`cardFlipAnswerContainer ${
                        isFlipped ? 'active' : 'inactive'
                    }`}
                    onClick={() => setIsFlipped(!isFlipped)}
                >
                    {answer()}
                </div>
        </div>
    )
}

const FAQ = () => {
  return (
    <main id='faq'>
      <div id='faqTitleContainer'>
        <h1>{t.faqShort}</h1>
        <h2>{t.faqLong}</h2>
        <img src={i.dalma.pointingUp} />
      </div>
      <div id='faqContainer'>
        <div className='faqQuestionContainer'>
            <FlashCard questionId='one' question={t.questions.one} answer={() => (
                <span>test</span>
            )} />
            <FlashCard questionId='two' question={t.questions.two} answer={() => (
                <span>test</span>
            )} />
            <FlashCard questionId='three' question={t.questions.three} answer={() => (
                <span>test</span>
            )} />
            <FlashCard questionId='four' question={t.questions.four} answer={() => (
                <span>test</span>
            )} />
            <FlashCard questionId='five' question={t.questions.five} answer={() => (
                <span>test</span>
            )} />
            <FlashCard questionId='six' question={t.questions.six} answer={() => (
                <span>test</span>
            )} />
        </div>
      </div>
    </main>
  )
}

export default FAQ;
