import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router'
import { connect } from 'react-redux'

import UserInfo from '../Auth/UserInfo'

import { paths } from '../../constants/paths'
import { i } from '../../constants/data/assets'
import { adminEmails } from '../../constants/data/admins'
import { setMagicLength } from '../../actions/magicCalendars'

import t from './text.js'
import './styles/index.scss'

const MagicCalendars = ({ setMagicLength, currentUser }) => {
  const navigate = useNavigate()
  const containerRef = useRef()

  const onChooseClick = length => {
    setMagicLength(length)
    navigate(`${paths.magicCalendars.page}/form/1`)
  }

  useEffect(() => {
    containerRef.current.scrollIntoView(true)
    if(!currentUser.email) {
      navigate(`${paths.auth.login}?redirect=${paths.magicCalendars.page}`)
    }
  })

  return currentUser.email && adminEmails.includes(currentUser?.email) && (
    <main id='magicCalendarsPage' ref={containerRef}>
      <UserInfo />
      <section id='titleSection' className='magicCalendarsSection'>
        <div id='magicCalendarsTitleContainer'>
          <img id='magicCalendarsTitle' src={i.magicCalendars.title} />
          <img id='magicCalendarsTitleWand' src={i.stock.wand} />
       </div>
       <h2 className='clickable' onClick={() => onChooseClick('superfast')}>
          {t.getMagicCalendar}
        </h2>
        <img id='magicCalendarsSubtitle' src={i.magicCalendars.subtitle} />
      </section>
      <section id='personalizationSection' className='magicCalendarsSection'>
        <div id='personalizationSectionLeft'>
          <h1>{t.personalizationSection.title}</h1>
          <ul>
            <li className='one'>
              <span className='one'>{t.personalizationSection.bullets.one.one}</span>
              <span className='two'>{t.personalizationSection.bullets.one.two}</span>
            </li>
            <li className='two'>
              <span className='one'>{t.personalizationSection.bullets.two.one}</span>
              <span className='two'>{t.personalizationSection.bullets.two.two}</span>
              <span className='three'>{t.personalizationSection.bullets.two.three}</span>
            </li>
            <li className='three'>
              <span className='one'>{t.personalizationSection.bullets.three.one}</span>
              <span className='two'>{t.personalizationSection.bullets.three.two}</span>
              <span className='three'>{t.personalizationSection.bullets.three.three}</span>
            </li>
          </ul>
        </div>
        <div id='personalizationSectionRight'>
          <img src={i.magicCalendars.smallBusinessGuy} />
        </div>
      </section>
      <section id='whatYouGetSection' className='magicCalendarsSection'>
        <div id='whatYouGetLeftSection'>
          <span
            className='clickable'
            onClick={() => onChooseClick('superfast')}
          >{t.getMagicCalendar}</span>
          <h1>{t.whatYouGetSection.title}</h1>
          <div className='whatYouGetLeftSectionSection'>
            <h2>{t.whatYouGetSection.bullets.one.title}</h2>
            <div className='whatYouGetLeftSectionBodySection'>
              <img src={i.icons.checkMark} />
              <p className='whatYouGetLeftSectionBodySectionBody'>
                <span className='one'>{t.whatYouGetSection.bullets.one.body.one}</span>
                <span className='two'>{t.whatYouGetSection.bullets.one.body.two}</span>
              </p>
            </div>
          </div>
          <div className='whatYouGetLeftSectionSection'>
            <h2>{t.whatYouGetSection.bullets.two.title}</h2>
            <div className='whatYouGetLeftSectionBodySection'>
              <img src={i.icons.checkMark} />
              <p className='whatYouGetLeftSectionBodySectionBody'>
                <span className='one'>{t.whatYouGetSection.bullets.two.body.one}</span>
                <span className='two'>{t.whatYouGetSection.bullets.two.body.two}</span>
              </p>
            </div>
          </div>
        </div>
        <div id='whatYouGetRightSection'>
          <div id='whatYouGetRightSectionLeft'>
            <img src={i.stock.contentCalendarAssets} />
            <div id='whatYouGetSectionContentCalendarSocialIconsContainer'>
              <img src={i.icons.instagramRealIcon} />
              <img src={i.icons.facebookRealIcon} />
              <img src={i.icons.tikTok} />
            </div>
          </div>
          <div id='whatYouGetRightSectionRight'>
            <div className='whatYouGetRightSectionRightSection'>
              <div className='whatYouGetRightSectionRightTitleContainer'>
                <img src={i.icons.checkMark} />
                <h2>{t.whatYouGetSection.bullets.three.title}</h2>
              </div>
              <hr />
              <p className='whatYouGetRightSectionBodySectionBody'>
                {t.whatYouGetSection.bullets.three.body.one}
              </p>
            </div>
            <div className='whatYouGetRightSectionRightSection'>
              <div className='whatYouGetRightSectionRightTitleContainer'>
                <img src={i.icons.checkMark} />
                <h2>{t.whatYouGetSection.bullets.four.title}</h2>
              </div>
              <hr />
              <p className='whatYouGetRightSectionBodySectionBody'>
                {t.whatYouGetSection.bullets.four.body.one}
              </p>
            </div>
            <div className='whatYouGetRightSectionRightSection'>
              <div className='whatYouGetRightSectionRightTitleContainer'>
                <img src={i.icons.checkMark} />
                <h2>{t.whatYouGetSection.bullets.five.title}</h2>
              </div>
              <hr />
              <p className='whatYouGetRightSectionBodySectionBody'>
                {t.whatYouGetSection.bullets.five.body.one}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='feedSection' className='magicCalendarsSection'>
        <img src={i.magicCalendars.inimtableGrid} />
        <div id='feedSectionRight'>
          <div className='feedSectionRightSection'>
            <h1>{t.feedSection.one.title}</h1>
            <h2>{t.feedSection.one.subtitle}</h2>
            <p>{t.feedSection.one.body}</p>
          </div>
          <div className='feedSectionRightSection'>
            <h1>{t.feedSection.two.title}</h1>
            <h2>{t.feedSection.two.subtitle}</h2>
            <p>{t.feedSection.two.body}</p>
          </div>
          <div className='feedSectionRightSection'>
            <h1>{t.feedSection.three.title}</h1>
            <h2>{t.feedSection.three.subtitle}</h2>
            <p>{t.feedSection.three.body}</p>
          </div>
        </div>
      </section>
      <section id='fillOutSection' className='magicCalendarsSection'>
        <h1>{t.fillOutSection.title}</h1>
        <div id='fillOutSectionStepsContainer'>
          <div className='fillOutSectionStep'>
            <img src={i.stock.survey} />
            <div className='fillOutSectionStepBody'>
              <span>{t.fillOutSection.steps.one.one}</span>
              <span>{t.fillOutSection.steps.one.two}</span>
            </div>
          </div>
          <div className='fillOutSectionStep'>
            <img src={i.stock.brand} />
            <div className='fillOutSectionStepBody'>
              <span>{t.fillOutSection.steps.two.one}</span>
              <span>{t.fillOutSection.steps.two.two}</span>
            </div>
          </div>
          <div className='fillOutSectionStep'>
            <img src={i.magicCalendars.lightbulbConstruction} />
            <div className='fillOutSectionStepBody'>
              <span>{t.fillOutSection.steps.three.one}</span>
              <span>{t.fillOutSection.steps.three.two}</span>
            </div>
          </div>
        </div>
      </section>
      <section id='chooseSection' className='magicCalendarsSection'>
        <h1>{t.chooseSection.title}</h1>
        <div id='chooseSectionSelectionsContainer'>
          <div className='chooseSectionSelection'>
            <div className='chooseSectionSelectionTitleContainer'>
              <h3>{t.chooseSection.options.one.title}</h3>
              <h2>{t.chooseSection.options.one.price}</h2>
              <hr />
              <div className='chooseSectionSelectionDescription'>
                <span>{t.chooseSection.options.one.description.choice}</span>
                <span>{t.chooseSection.options.one.description.inbox}</span>
                <span>{t.chooseSection.options.one.description.time}</span>
              </div>
            </div>
            <ul className='chooseSectionSelectionBulletsContainer'>
              {Object.keys(t.chooseSection.options.one.bullets).map((bullet, index) => (
                <li key={index} className='chooseSectionSelectionBullet'>
                  <img src={i.icons.checkMark} />
                  <p>{t.chooseSection.options.one.bullets[bullet]}</p>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => onChooseClick('month')}
              className='chooseSectionSelectionCta clickable'
            >
              {t.chooseSection.options.one.cta}
            </button>
          </div>
          <div className='chooseSectionSelection'>
            <div className='chooseSectionSelectionTitleContainer'>
              <h3>{t.chooseSection.options.two.title}</h3>
              <h2>{t.chooseSection.options.two.price}</h2>
              <hr />
              <div className='chooseSectionSelectionDescription'>
                <span>{t.chooseSection.options.two.description.choice}</span>
                <span>{t.chooseSection.options.two.description.inbox}</span>
                <span>{t.chooseSection.options.two.description.time}</span>
              </div>
            </div>
            <ul className='chooseSectionSelectionBulletsContainer'>
              {Object.keys(t.chooseSection.options.two.bullets).map((bullet, index) => (
                <li key={index} className='chooseSectionSelectionBullet'>
                  <img src={i.icons.checkMark} />
                  <p>{t.chooseSection.options.two.bullets[bullet]}</p>
                </li>
              ))}
            </ul>
            <button 
              onClick={() => onChooseClick('year')}
              className='chooseSectionSelectionCta clickable'
            >
              {t.chooseSection.options.two.cta}
            </button>
          </div>
        </div>
      </section>
      <section id='innovateSection' className='magicCalendarsSection'>
      <div id='innovateSectionWandContainer'>
        <img id='innovateSectionWand' src={i.stock.wand} />
        <img id='innovateSectionMagic' src={i.stars.starTwinklesLarge} />
        </div>
        <div id='innovateSectionContentContainer'>
          <h1>{t.innovateSection.title}</h1>
          <p>{t.innovateSection.description}</p>
          <button  
            className='clickable'
            onClick={() => onChooseClick('month')}
          >
            {t.innovateSection.cta}
          </button>
        </div>
      </section>
    </main>
  )
}

const mapState = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatch = dispatch => ({
  setMagicLength: async speed => {
    dispatch(setMagicLength(speed))
  }
})

export default connect(mapState, mapDispatch)(MagicCalendars);
