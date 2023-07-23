import React from 'react'
import { Link } from 'react-router-dom'

import { i } from '../../constants/assets'
import { paths } from '../../constants/routes'
import './styles/index.scss'

const t = {
  title: 'How to be successful on social without having to go viral',
  comingSoon: 'Coming Soon',
  date: 'On 11/23',
  home1: 'Go back ',
  home2: 'home'
}

const SuperClass = () => {
  return (
    <main id='superClassPage'>
      <img id='superClassTvStatic' src={i.videos.tvStatic} />
      <img id='superClassStarTwinkles' src={i.stars.starTwinklesLarge} />
      <h3>{t.title}</h3>
      <h1>{t.comingSoon}</h1>
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
