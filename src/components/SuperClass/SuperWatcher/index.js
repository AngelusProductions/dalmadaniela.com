import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import ScrollToTop from "react-scroll-to-top"
import MuxPlayer from '@mux/mux-player-react'

import HomeIcon from '../../UI/HomeIcon'
import BackIcon from '../../UI/BackIcon'

import { paths } from '../../../constants/paths'
import videos from '../../../constants/data/videos'
import { getHumanizedDuration } from '../../../constants/time'

import './styles/index.scss'

const t = {
  title: 'SuperWatcher',
  thumbnailSource: (playbackId, thumbnailStart) => `https://image.mux.com/${playbackId}/animated.gif?start=${thumbnailStart}&fps=30`
}

export const SuperWatcher = () => {
  const { id } = useParams()
  
  const currentVideo = videos.find(video => video.id == id)
  const otherVideos = videos.filter(video => video.id > currentVideo.id)
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [])

  return (
    <div id='superWatcherPageContainer'>
      <HomeIcon />
      <BackIcon path={paths.superClass.videos} />
      {currentVideo && (
        <>
          <h1>{currentVideo.name}</h1>
          <MuxPlayer
            streamType="on-demand"
            playbackId={currentVideo.playbackId}
            metadataVideoTitle={currentVideo.name}
            metadataViewerUserId="Test"
            primaryColor="#DA2A7D"
            secondaryColor="#FEFF7C"
          />
        </>
      )}
      {otherVideos.map(({ id, name, playbackId, thumbnailStart, duration }) => (
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

export default connect(mapState, mapDispatch)(SuperWatcher)