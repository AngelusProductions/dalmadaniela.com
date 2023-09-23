import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import ScrollToTop from 'react-scroll-to-top'

import HomeIcon from '../../UI/HomeIcon'

import videos from '../../../constants/data/videos'

import './styles/index.scss'
import SuperThumbnail from '../SuperThumbnail'
import { clearCurrentSuperInfo } from '../../../actions/superClass'
import { paths } from '../../../constants/paths'

const t = {
  title: 'Welcome to',
  superclass: 'SuperClass',
  hello: name => `Hello, ${name}`,
  logOut: 'Log Out'
}

export const SuperVideos = ({ superUser }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if(!superUser) {
      navigate(paths.superClass.login)
    }
  }, [])
  
  const onLogoutClick = () => {
    dispatch(clearCurrentSuperInfo())
    navigate(paths.superClass.login)
  }

  return  superUser && (
    <div id='superVideosPageContainer'>
      <HomeIcon />
      <span id='superClassVideosHello'>{t.hello(superUser.first_name)}</span>
      <button className='superClassLogoutButton clickable' onClick={onLogoutClick}>{t.logOut}</button>
      <h1>{t.title} <span>{t.superclass}</span></h1>
      {videos.map(video => <SuperThumbnail {...video} key={video.id} />)}
      <ScrollToTop smooth />
    </div>
  )
}

const mapState = state => {
  return {
    superUser: state.superClass.superUser
  }
}

export default connect(mapState, null)(SuperVideos)