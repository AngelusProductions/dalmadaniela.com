import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import ScrollToTop from 'react-scroll-to-top'

import HomeIcon from '../../UI/HomeIcon'

import videos from '../../../constants/data/videos'
import { paths } from '../../../constants/paths'
import { getHumanizedDuration } from '../../../constants/time'

import './styles/index.scss'

const t = {
  title: 'Welcome to',
  superclass: 'SuperClass',
  thumbnailSource: (playbackId, thumbnailStart) => `https://image.mux.com/${playbackId}/animated.gif?start=${thumbnailStart}&fps=30`
}

export const SuperVideos = () => {
  
  return (
    <div id='superVideosPageContainer'>
      <HomeIcon />
      <h1>{t.title} <span>{t.superclass}</span></h1>
      {videos.map(({ id, name, playbackId, thumbnailStart, duration }) => (
        <Link to={`${paths.superClass.videos}/${id}`} key={id} className='superVideoContainer clickable'>
          <h2>{name}</h2>
          <p>{getHumanizedDuration(duration)}</p>
          <img src={t.thumbnailSource(playbackId, thumbnailStart)} />
        </Link>
      ))}
      <ScrollToTop smooth />
    </div>
  )
}

const mapState = state => {

}

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(SuperVideos)