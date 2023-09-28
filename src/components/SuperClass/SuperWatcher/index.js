import React, { useState, useEffect, useRef } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import ScrollToTop from "react-scroll-to-top"
import MuxPlayer from '@mux/mux-player-react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleStop, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'

import HomeIcon from '../../UI/HomeIcon'
import BackIcon from '../../UI/BackIcon'
import SuperThumbnail from '../SuperThumbnail'

import { paths } from '../../../constants/paths'
import superClassVideos from '../../../constants/data/superClassVideos'
import { clearCurrentSuperInfo } from '../../../actions/superClass'
import { getSuperVideoProgress, saveSuperVideoProgress, saveSuperVideoCompletion } from '../../../api/superClass'

import './styles/index.scss'

const t = {
  title: 'SuperWatcher',
  countdown: remainingTime => `Next video starts in ${remainingTime} second${remainingTime === 1 ? '' : 's'}`,
  logOut: 'Log Out',
  thumbnailSource: (playbackId, thumbnailStart) => `https://image.mux.com/${playbackId}/animated.gif?start=${thumbnailStart}&fps=30`
}

export const SuperWatcher = ({ superUser }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const containerRef = useRef()
  
  const [startTime, setStartTime] = useState(null)
  const [showCountdown, setShowCountdown] = useState(false)
  
  const currentVideo = superClassVideos.find(video => video.id == id)
  const otherVideos = superClassVideos.filter(video => video.id > currentVideo.id)
  
  const updateStartTime = (email, videoId) =>{
    getSuperVideoProgress(email, videoId).then(data => {
      setStartTime(data.timestamp)
    })
  }

  useEffect(() => {
    if(!superUser) {
      navigate(paths.superClass.login)
    }
    containerRef.current.scrollIntoView(true)
    updateStartTime(superUser.email, currentVideo.id)
    return () => setStartTime(null)
  }, [])
  
  useEffect(() => {
    updateStartTime(superUser.email, currentVideo.id)
    return () => setStartTime(null)
  }, [id])

  const onLogoutClick = () => {
    dispatch(clearCurrentSuperInfo())
    navigate(paths.superClass.login)
  }
  
  return superUser && (
    <div id='superWatcherPageContainer' ref={containerRef}>
      <HomeIcon />
      <BackIcon path={paths.superClass.videos} />
      <button className='superClassLogoutButton clickable' onClick={onLogoutClick}>{t.logOut}</button>
      {currentVideo && (
        <>
          <h1>{currentVideo.id}.&nbsp;{currentVideo.name}</h1>
          <div id='superWatcherVideoContainer'>
            {currentVideo.id !== 1 && <FontAwesomeIcon 
              icon={faBackward} 
              color='#ffffff' 
              className='clickable'
              onClick={() => navigate(`${paths.superClass.videos}/${currentVideo.id - 1}`)}
            />}
            {startTime !== null && <MuxPlayer
              streamType="on-demand"
              playbackId={currentVideo.playbackId}
              metadataVideoTitle={currentVideo.name}
              metadataViewerUserId={superUser.email}
              primaryColor="#DA2A7D"
              secondaryColor="#FEFF7C"
              startTime={startTime}
              thumbnailTime={currentVideo.thumbnailStart}
              onTimeUpdate={e => {
                const { currentTime } = e.target
                if(currentTime >= 30 && currentTime % 30 < 0.3) {
                  saveSuperVideoProgress({
                    email: superUser.email,
                    videoId: currentVideo.id,
                    timestamp: Math.floor(currentTime)
                  })
                }
              }}
              onEnded={() => {
                saveSuperVideoCompletion({ 
                  email: superUser.email, 
                  videoId: currentVideo.id 
                })
                if (currentVideo.id !== 11)
                  setShowCountdown(true)
              }}
            />}
            {currentVideo.id !== 11 && <FontAwesomeIcon 
              icon={faForward} 
              color='#ffffff' 
              className='clickable'
              onClick={() => navigate(`${paths.superClass.videos}/${currentVideo.id + 1}`)}
            />}
            {showCountdown && (
              <div id='superWatcherCountdownContainer'>
                <CountdownCircleTimer
                  isPlaying={showCountdown}
                  duration={10}
                  colors={['#FEFF7C', '#DA2A7D']}
                  colorsTime={[10, 5]}
                  onComplete={() => {
                    setShowCountdown(false)
                    navigate(`${paths.superClass.videos}/${currentVideo.id + 1}`)
                  }}
                >
                  {({ remainingTime }) => 
                    <p id='superWatcherCountdownText'>
                      <FontAwesomeIcon 
                        className='clickable'
                        icon={faCircleStop} 
                        color='#ffffff' 
                        onClick={() => setShowCountdown(false)}
                      />
                      <br />
                      {t.countdown(remainingTime)}
                    </p>
                  }
                </CountdownCircleTimer>
              </div>
            )}
          </div>
        </>
      )}
      {otherVideos.map(video => <SuperThumbnail key={video.id} {...video} />)}
      <ScrollToTop smooth className='clickable' />
    </div>
  )
}

const mapState = state => {
  return {
    superUser: state.superClass.superUser
  }
}

const mapDispatch = dispatch => ({
  
})

export default connect(mapState, mapDispatch)(SuperWatcher)