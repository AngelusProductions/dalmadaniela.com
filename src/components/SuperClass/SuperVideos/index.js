import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import ScrollToTop from 'react-scroll-to-top'

import HomeIcon from '../../UI/HomeIcon'

import videos from '../../../constants/data/videos'

import './styles/index.scss'
import SuperThumbnail from '../SuperThumbnail'

const t = {
  title: 'Welcome to',
  superclass: 'SuperClass'
}

export const SuperVideos = ({ currentUser }) => {
  const navigate = useNavigate()
  
  useEffect(() => {
    // if(!currentUser.email) {
    //   navigate(`${paths.auth.login}?redirect=${paths.superClass.videos}`)
    // }
  })

  return  (
    <div id='superVideosPageContainer'>
      <HomeIcon />
      <h1>{t.title} <span>{t.superclass}</span></h1>
      {videos.map(video => <SuperThumbnail {...video} />)}
      <ScrollToTop smooth />
    </div>
  )
}

const mapState = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapState, null)(SuperVideos)