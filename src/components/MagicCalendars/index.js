import React from 'react'

import HomeIcon from '../UI/HomeIcon'

import { i } from '../../constants/data/assets'

import t from './text.js'
import './styles/index.scss'

const MagicCalendars = () => {
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
        
      </section>
      <section id='fillOutSection' className='magicCalendarsSection'>
        
      </section>
      <section id='chooseSection' className='magicCalendarsSection'>
        
      </section>
      <section id='innovateSection' className='magicCalendarsSection'>
        
      </section>
    </main>
  )
}

export default MagicCalendars;
