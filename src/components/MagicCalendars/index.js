import React from 'react'
import { useNavigate } from 'react-router'
import { connect } from 'react-redux'

import HomeIcon from '../UI/HomeIcon'

import { paths } from '../../constants/paths'
import { i } from '../../constants/data/assets'
import { setMagicSpeed } from '../../actions/magicCalendars'

import t from './text.js'
import './styles/index.scss'

const MagicCalendars = ({ setMagicSpeed }) => {
  const navigate = useNavigate()

  const onChooseClick = speed => {
    setMagicSpeed(speed)
    navigate(paths.magicCalendars.checkout)
  }

  return (
    <main id='magicCalendarsPage'>
      <HomeIcon />
      <section id='titleSection' className='magicCalendarsSection'>
        <h1>{t.titleSection.title}</h1>
        <h2>{t.magicCalendars}</h2>
        <h3>{t.titleSection.subtitle}</h3>
        <img id='magicCalendarsTitleSectionComputerHands' src={i.stock.computerHands} />
        <div id='magicCalendarsTitleSectionWandContainer'>
          <img id='magicCalendarsTitleSectionWand' src={i.stock.wand} />
          <img id='magicCalendarsTitleSectionWandMagic' src={i.stars.starTwinklesLarge} />
        </div>
        <img id='magicCalendarsTitleSectionWandBackgroundMagic' src={i.stars.starTwinklesLarge} /> 
      </section>
      <section id='smallBusinessSection' className='magicCalendarsSection'>
        <img src={i.stock.smallBusinessOwner} />
      </section>
      <section id='personalizationSection' className='magicCalendarsSection'>
        <div>
          <h1>{t.personalizationSection.title}</h1>
          <img src={i.stock.instagramFeed} />
        </div>
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
      </section>
      <section id='feedSection' className='magicCalendarsSection'>
        <img src={i.stock.bigBenContentCalendar} />
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
      <section id='whatYouGetSection' className='magicCalendarsSection'>
        <div id='whatYouGetLeftSection'>
          <span>{t.magicCalendars}</span>
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
              <img src={i.icons.threadsRealIcon} />
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
            <img src={i.videos.lightbulbConstruction} />
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
              <li className='chooseSectionSelectionBullet'>
                <img src={i.icons.checkMark} />
                <p>{t.chooseSection.options.one.bullets.one}</p>
              </li>
              <li className='chooseSectionSelectionBullet'>
                <img src={i.icons.checkMark} />
                <p>{t.chooseSection.options.one.bullets.two}</p>
              </li>
            </ul>
            <button 
              onClick={() => onChooseClick('standard')}
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
              <li className='chooseSectionSelectionBullet'>
                <img src={i.icons.checkMark} />
                <p>{t.chooseSection.options.two.bullets.one}</p>
              </li>
              <li className='chooseSectionSelectionBullet'>
                <img src={i.icons.checkMark} />
                <p>{t.chooseSection.options.two.bullets.two}</p>
              </li>
              <li className='chooseSectionSelectionBullet'>
                <img src={i.icons.checkMark} />
                <p>{t.chooseSection.options.two.bullets.three}</p>
              </li>
            </ul>
            <button 
              onClick={() => onChooseClick('fast')}
              className='chooseSectionSelectionCta clickable'
            >
              {t.chooseSection.options.two.cta}
            </button>
          </div>
          <div className='chooseSectionSelection'>
            <div className='chooseSectionSelectionTitleContainer'>
              <h3>{t.chooseSection.options.three.title}</h3>
              <h2>{t.chooseSection.options.three.price}</h2>
              <hr />
              <div className='chooseSectionSelectionDescription'>
                <span>{t.chooseSection.options.three.description.choice}</span>
                <span>{t.chooseSection.options.three.description.inbox}</span>
                <span>{t.chooseSection.options.three.description.time}</span>
              </div>
            </div>
            <ul className='chooseSectionSelectionBulletsContainer'>
              <li className='chooseSectionSelectionBullet'>
                <img src={i.icons.checkMark} />
                <p>{t.chooseSection.options.three.bullets.one}</p>
              </li>
              <li className='chooseSectionSelectionBullet'>
                <img src={i.icons.checkMark} />
                <p>{t.chooseSection.options.three.bullets.two}</p>
              </li>
              <li className='chooseSectionSelectionBullet'>
                <img src={i.icons.checkMark} />
                <p>{t.chooseSection.options.three.bullets.three}</p>
              </li>
              <li className='chooseSectionSelectionBullet'>
                <img src={i.icons.checkMark} />
                <p>{t.chooseSection.options.three.bullets.four}</p>
              </li>
              <li className='chooseSectionSelectionBullet'>
                <img src={i.icons.checkMark} />
                <p>{t.chooseSection.options.three.bullets.five}</p>
              </li>
            </ul>
            <button 
              onClick={() => onChooseClick('superfast')}
              className='chooseSectionSelectionCta clickable'
            >
              {t.chooseSection.options.three.cta}
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
          <div>
            <img src={i.icons.face} />
            <h4>{t.innovateSection.websiteName}</h4>
          </div>
          <h1>{t.innovateSection.title}</h1>
          <h2>
            <p>{t.innovateSection.description1}</p>
            <p>{t.innovateSection.description2}</p>
          </h2>
          <button className='clickable'>{t.innovateSection.cta}</button>
        </div>
      </section>
    </main>
  )
}

const mapDispatch = dispatch => ({
  setMagicSpeed: async speed => {
    dispatch(setMagicSpeed(speed))
  }
})

export default connect(null, mapDispatch)(MagicCalendars);
