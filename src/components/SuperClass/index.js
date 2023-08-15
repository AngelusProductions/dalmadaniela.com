import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import SuperClassPopUp from '../UI/SuperClassPopUp'

import { i } from '../../constants/data/assets'
import { paths } from '../../constants/paths'
import { checkForReoccuringIP, saveSuperClassSubscribeInfo } from '../../api/superClass'

import './styles/index.scss'

const t = {
  title: 'How to be successful on social without having to go viral',
  comingSoon: 'Coming Soon',
  date: 'On 11/23',
  home1: 'Go back ',
  home2: 'home',
  signup: {
      header: {
        1: 'Grow with our ',
        2: 'SuperClass.',
        3: 'Sign up ',
        4: 'today',
        5: ' and save ',
        6: '15%',
        7: " when it's released!",
        8: 'ALMOST FULL!'
    },
    email: 'Email *',
    subscribe: 'Subscribe',
    thankYou1: 'Thank you for subscribing!',
    thankYou2: '(This popup will automatically close in 2 seconds.)',
  },
  IPUrl: 'https://api.ipify.org/?format=json'
}

const SuperClass = () => {
  const [showThankYou, setShowThankYou] = useState(false)

  const onSubscribeClick = async email => {
    const res = await saveSuperClassSubscribeInfo({ email })
    if (res.isSuccess) {
      setShowThankYou(true)
    }
  }

  return (
    <main id='superClassPage'>
      <img id='superClassTvStatic' src={i.videos.tvStatic} />
      <h3>{t.title}</h3>
        <SuperClassPopUp 
          onSubscribeClick={onSubscribeClick}
          showThankYou={showThankYou}
          showCloseButton={false}
        />
        <div id='superClassNavigationContainer'>
          <span id='superClassDate'>{t.date}</span>
          <div id='superClassHomeText'>
            <span>{t.home1}</span>
            <Link to={paths.home} id='superClassHomeLink'>
              {t.home2}
            </Link>
          </div>
        </div>
      </main>
  )
}

export default SuperClass;
