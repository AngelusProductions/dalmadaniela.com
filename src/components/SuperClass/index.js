import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import HomeIcon from '../UI/HomeIcon'
import SuperClassPopUp from '../UI/SuperClassPopUp'

import { i } from '../../constants/data/assets'
import { paths } from '../../constants/paths'
import { saveSuperClassSubscribeInfo } from '../../api/superClass'

import './styles/index.scss'

const t = {
  date: 'On 11/23',
  home1: 'Go back ',
  home2: 'home',
  classTitle: 'How to be successful on social without having to go viral',
  classDescription1: 'We spent 10 years developing the only content system you\'ll ever need for your social media.',
  classDescription2: 'Become successful on social and get exactly what you want: brand awareness, conversions, bookings, reach, and authority without having to go viral, have big numbers, or invest a lot of money.',
  classDescription3: 'Only 1.1% of social videos go viral, And when they do, most of the time, they generate reach, NOT sales.',
  classDescription4: 'When you focus on creating viral content, you burn out easily and get discouraged because you focus on the outcome, not the process, and why you\'re doing this in the first place.',
  classDescription5: 'No more of that. It\'s time to destroy the myth and drop viral content off the pedestal. In this SuperClass, you\'ll learn:',
  classHowTo: [
    'How to be found by those who matter when it matters.',
    'How to create a social media strategy that works for you.',
    'How to post with purpose and provide value to your audience on autopilot.',
    'How to leverage your social media presence to grow your business and personal brand in the real world.',
  ],
  classCta: 'Download',
}

const SuperClass = () => {
  const [showThankYou, setShowThankYou] = useState(false)
  const [showSuperClassPopUp, setShowSuperClassPopUp] = useState(false)

  const onSubscribeClick = async (name, email) => {
    const res = await saveSuperClassSubscribeInfo({ name, email })
    if (res.isSuccess) {
      setShowThankYou(true)
    }
  }

  return (
    <main id='superClassPage'>
    <HomeIcon />
      <img id='superClassTvStatic' src={i.videos.tvStatic} />
      {showSuperClassPopUp && (
        <SuperClassPopUp 
          onCloseClick={() => setShowSuperClassPopUp(false)}
          onSubscribeClick={onSubscribeClick}
          showThankYou={showThankYou}
        />
      )}

      <section id='classAboutContainer'>
        <span className='part1'>{t.classDescription1}</span>
        <span className='part2'>{t.classDescription2}</span>
        <span className='part3'>{t.classDescription3}</span>
        <span className='part4'>{t.classDescription4}</span>
        <span className='part5'>{t.classDescription5}</span>
        <ul id='classHowTo'>
          {t.classHowTo.map((howTo, index) => (
            <li key={index} className='howTo'>{howTo}</li>
          ))}
        </ul>
        <button 
          id='classCta'
          className='clickable'
          onClick={() => setShowSuperClassPopUp(true)}    
        >
          {t.classCta}
        </button>
      </section>

      {/* <div id='superClassNavigationContainer'>
        <div id='superClassHomeText'>
          <span>{t.home1}</span>
          <Link to={paths.home} id='superClassHomeLink'>
            {t.home2}
          </Link>
        </div>
      </div> */}
    </main>
  )
}

export default SuperClass;
