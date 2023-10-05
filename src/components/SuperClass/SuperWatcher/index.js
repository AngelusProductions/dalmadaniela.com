import React, { useState, useEffect, useRef } from 'react'
import { connect, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import ScrollToTop from "react-scroll-to-top"
import MuxPlayer from '@mux/mux-player-react'
// import muxBlurHash from "@mux/blurhash";
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleStop, faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import HashLoader from "react-spinners/HashLoader"

import HomeIcon from '../../UI/HomeIcon'
import BackIcon from '../../UI/BackIcon'
import SuperThumbnail from '../SuperThumbnail'

import { paths } from '../../../constants/paths'
import superClassVideos from '../../../constants/data/superClassVideos'
import { clearCurrentSuperInfo } from '../../../actions/superClass'
import { getSuperVideoProgress, saveSuperVideoProgress, saveSuperVideoCompletion } from '../../../api/superClass'

import './styles/index.scss'
import { Link } from 'react-router-dom'

const t = {
  title: 'SuperWatcher',
  countdown: remainingTime => `Next video starts in ${remainingTime} second${remainingTime === 1 ? '' : 's'}`,
  logOut: 'Log Out',
  back: 'Go Back',
  thumbnailSource: (playbackId, thumbnailStart) => `https://image.mux.com/${playbackId}/animated.gif?start=${thumbnailStart}&fps=30`
}

export const SuperWatcher = ({ superUser }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const containerRef = useRef()
  const videoPlayerRef = useRef()
  
  const [startTime, setStartTime] = useState(null)
  const [completedVideoIds, setCompletedVideoIds] = useState([])
  const [showCountdown, setShowCountdown] = useState(false)
  const [isVideoLoading, setIsVideoLoading] = useState(true)
  
  const currentVideo = superClassVideos.find(video => video.id == id)
  const otherVideos = superClassVideos.filter(video => video.id > currentVideo.id)
  
  const updateStartTime = (email, videoId) =>{
    getSuperVideoProgress(email, videoId).then(data => {
      setStartTime(data.timestamp)
      setCompletedVideoIds(data.completedVideoIds)
    })
  }

  useEffect(() => {
    if(!superUser) {
      navigate(paths.superClass.login)
    }
    containerRef.current.scrollIntoView(true)
    updateStartTime(superUser.email, currentVideo.id)
    return () => {
      setStartTime(null)
      setIsVideoLoading(false)
    }
  }, [])
  
  useEffect(() => {
    updateStartTime(superUser.email, currentVideo.id)
    return () => {
      setStartTime(null)
      setIsVideoLoading(false)
    }
  }, [id])

  const onLogoutClick = () => {
    dispatch(clearCurrentSuperInfo())
    navigate(paths.superClass.login)
  }

  return superUser && (
    <div id='superWatcherPageContainer' ref={containerRef}>
      {/* <HomeIcon /> */}
      <Link id='superWatcherGoBackButton' className='clickable' to={paths.superClass.videos}>{t.back}</Link>
      <button className='superClassLogoutButton clickable' onClick={onLogoutClick}>{t.logOut}</button>
      {currentVideo && (
        <>
          <h1><span id='superWatcherTitleNumber'>{currentVideo.id}.&nbsp;</span>{currentVideo.name}</h1>
          <div id='superWatcherVideoContainer'>
            {!isVideoLoading && currentVideo.id !== 1 && <FontAwesomeIcon 
              icon={faBackward} 
              color='#ffffff' 
              className='watcherArrow clickable'
              onClick={() => navigate(`${paths.superClass.videos}/${currentVideo.id - 1}`)}
            />}
            {startTime !== null && <MuxPlayer
              streamType="on-demand"
              primaryColor="#DA2A7D"
              secondaryColor="#FEFF7C"
              title={currentVideo.title}
              playbackId={currentVideo.playbackId}
              metadataVideoTitle={currentVideo.name}
              metadataViewerUserId={superUser.email}
              onLoadedMetadata={() => setIsVideoLoading(false)}
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
              style={{ aspectRatio: 16/9 }}
              placeholder={
                <HashLoader id='superWatcherLoading' color='#FEFF7C' loading />
              }
              onEnded={() => {
                saveSuperVideoCompletion({ 
                  email: superUser.email, 
                  videoId: currentVideo.id 
                })
                if (currentVideo.id !== 11)
                  setShowCountdown(true)
              }}
            />}
            {!isVideoLoading && currentVideo.id !== 11 && <FontAwesomeIcon 
              icon={faForward} 
              color='#ffffff' 
              className='watcherArrow clickable'
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
      <div className='superClassVideosContainer'>
        {completedVideoIds && otherVideos.map(video => 
          <SuperThumbnail key={video.id} {...video} isCompleted={completedVideoIds.includes(video.id)} />)}
      </div>
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