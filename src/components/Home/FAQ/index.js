import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { paths } from '../../../constants/paths'
import { i } from '../../../constants/data/assets'
import './styles/index.scss'

const t = {
    faqShort: 'FAQ',
    faqLong: 'Frequently Asked Questions',
    questions: {
        one: 'What is dalmadaniela.com?',
        two: 'What products & services can I buy on dalmadaniela.com?',
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
            className={`cardFlipContainer ${
                isFlipped ? 'flipped' : 'normal'
            }`}
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
                <div id='faqAnswer-one' className='faqAnswer'>
                    <span className='one'>
                        We are a&nbsp;
                    </span>
                    <span className='two'>
                        one-stop content creation shop&nbsp;
                    </span>
                    <span className='three'>
                        for small businesses, personal brands, artists, and solopreneurs&nbsp;
                    </span>
                    <span className='four'>
                         looking to optimize their social media experience.
                    </span>
                </div>
            )} />
            <FlashCard questionId='two' question={t.questions.two} answer={() => (
                <div id='faqAnswer-two' className='faqAnswer'>
                    <span className='one'>
                        It depends on your journey. If you want to master how to create your own social media strategy and produce content that aligns with your goals,&nbsp;
                    </span>
                    <span className='two'>
                        sign up for&nbsp;
                    </span>
                    <span className='three'>
                        <Link to={paths.superClass}>SuperClass.</Link>&nbsp;
                    </span>
                    <span className='four'>
                        If you are busy running a business, you can get a&nbsp;
                    </span>
                    <span className='five'>
                         Magic Calendar&nbsp;
                    </span>
                    <span className='six'>
                         that creates your monthly social media content for you.
                    </span>
                </div>
            )} />
            <FlashCard questionId='three' question={t.questions.three} answer={() => (
                <div id='faqAnswer-three' className='faqAnswer'>
                    <span className='one'>
                        With&nbsp;
                    </span>
                    <span className='two'>
                        Magic Calendars&nbsp;
                    </span>
                    <span className='three'>
                       you can have high-quality social media posts for your brand or business in an&nbsp;
                    </span>
                    <span className='four'>
                        easy, affordable, and innovative way.&nbsp;
                    </span>
                    <span className='five'>
                         The content will be in your email in less than 24 hours.&nbsp;
                    </span>
                    <span className='six'>
                         Learn how to automate your monthly social media content creation&nbsp;
                    </span>
                    <span className='seven'>
                         here.
                    </span>
                </div>
            )} />
            <FlashCard questionId='four' question={t.questions.four} answer={() => (
                <div id='faqAnswer-four' className='faqAnswer'>
                    <span className='one'>
                        <Link to={paths.superClass}>SuperClass</Link>&nbsp;
                    </span>
                    <span className='two'>
                        teaches you the only content creation system you need for social media.&nbsp;
                    </span>
                    <span className='three'>
                       Only 1.1% of social media posts go viral,&nbsp;
                    </span>
                    <span className='four'>
                        so you need the best skills to make an impact.&nbsp;
                    </span>
                    <span className='five'>
                         SuperClass will help you use social media to accomplish your real-world goals.
                    </span>
                </div>
            )} />
            <FlashCard questionId='five' question={t.questions.five} answer={() => (
                <div id='faqAnswer-five' className='faqAnswer'>
                    <span className='one'>
                        We realize that social media can be stressful.&nbsp;
                    </span>
                    <span className='two'>
                       In 10+ years of experience&nbsp;
                    </span>
                    <span className='three'>
                        our team has faced the troubles that brands and creators encounter on social media.&nbsp;  
                    </span>
                    <span className='four'>
                         We want to make social media better for everyone by making content creation easy, simple, and affordable.
                    </span>
                </div>
            )} />
            <FlashCard questionId='six' question={t.questions.six} answer={() => (
                 <div id='faqAnswer-six' className='faqAnswer'>
                    <span className='one'>
                        Our multipotentialite marketing team is based in&nbsp;
                    </span>
                    <span className='two'>
                        Los Angeles, CA&nbsp;
                    </span>
                    <span className='three'>
                       and&nbsp;
                    </span>
                    <span className='four'>
                        London, England.
                    </span>
                </div>
            )} />
        </div>
      </div>
    </main>
  )
}

export default FAQ;
