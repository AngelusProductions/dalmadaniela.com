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
        
      </section>
      <section id='feedSection' className='magicCalendarsSection'>
        
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
