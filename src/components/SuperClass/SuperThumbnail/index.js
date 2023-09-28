import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

import { paths } from '../../../constants/paths'
import { getHumanizedDuration } from '../../../constants/time'

import './styles/index.scss'

const t = {
  thumbnailSource: (playbackId, thumbnailGIFStart) => `https://image.mux.com/${playbackId}/animated.gif?start=${thumbnailGIFStart}&fps=30`
}

export const SuperThumbnail = ({ 
  id, name, playbackId, thumbnailGIFStart, duration, isCompleted
}) => {
  return  (
    <div className='superThumbnailContainer' key={id}>
      <Link 
        id={`superThumbnail.${id}`}
        to={`${paths.superClass.videos}/${id}`} 
        className='superThumbnail clickable'
      >
        <img src={t.thumbnailSource(playbackId, thumbnailGIFStart)} />
        {isCompleted && <FontAwesomeIcon id='superThumbnailCompletedCheckIcon' icon={faCheckSquare} color={'#FFFFFF'} />}
      </Link>
      <div className='superThumbnailTitleContainer'>
        <Link to={`${paths.superClass.videos}/${id}`}>
          <h2>{id}.&nbsp;{name}</h2>
        </Link>
        <p>{getHumanizedDuration(duration)}</p>
      </div>
    </div>
      
  )
}

export default SuperThumbnail