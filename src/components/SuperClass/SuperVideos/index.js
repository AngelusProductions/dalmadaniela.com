import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import ScrollToTop from 'react-scroll-to-top'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader"

import HomeIcon from '../../UI/HomeIcon'
import SuperThumbnail from '../SuperThumbnail'

import { paths } from '../../../constants/paths'
import { getSuperUserProgress } from '../../../api/superClass'
import { clearCurrentSuperInfo } from '../../../actions/superClass'
import superClassVideos from '../../../constants/data/superClassVideos'

import './styles/index.scss'

const t = {
  title: 'Welcome to',
  superclass: 'SuperClass',
  hello: name => `Hello, ${name}`,
  continue: currentVideoId => `Continue Section ${currentVideoId}`,
  logOut: 'Log Out'
}

export const SuperVideos = ({ superUser }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const containerRef = useRef()

  const [superProgress, setSuperProgress] = useState(null)

  useEffect(() => {
    if(!superUser) {
      navigate(paths.superClass.login)
    }
    containerRef.current.scrollIntoView(true)
    getSuperUserProgress(superUser.email).then(progress => {
      setSuperProgress(progress)
    })
  }, [])

  const onLogoutClick = () => {
    dispatch(clearCurrentSuperInfo())
    navigate(paths.superClass.login)
  }

  return  superUser && (
    <div id='superVideosPageContainer' ref={containerRef}>
      <HomeIcon />
      <span id='superClassVideosHello'>{t.hello(superUser.first_name)}</span>
      <button className='superClassLogoutButton clickable' onClick={onLogoutClick}>{t.logOut}</button>
      <h1>{t.title} <span>{t.superclass}</span></h1>

      {superProgress ? (
        <>
          <div 
            id='superVideosContinueContainer' 
            className='clickable'
            onClick={() => navigate(`${paths.superClass.videos}/${superProgress.videoId}`)}
          >
            <FontAwesomeIcon icon={faGraduationCap} />
            <p>{t.continue(superProgress.videoId)}</p>
          </div>
          <div className='superClassVideosContainer'>
            {superClassVideos.map(video => (
              <SuperThumbnail {...video} key={video.id} isCompleted={superProgress.completedVideoIds.includes(video.id)} />)
            )}
          </div> 
        </>
      ) : (
        <ClimbingBoxLoader id='superClassProgressLoader' color='#FEFF7C' loading />
      )}
      
      <ScrollToTop smooth className='clickable' />
    </div>
  )
}

const mapState = state => {
  return {
    superUser: state.superClass.superUser
  }
}

export default connect(mapState, null)(SuperVideos)