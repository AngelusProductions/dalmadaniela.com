import React from 'react'
import { Link } from 'react-router-dom'

import { paths } from '../../../constants/paths'
import { getHumanizedDuration } from '../../../constants/time'

import './styles/index.scss'

const t = {
  thumbnailSource: (playbackId, thumbnailStart) => `https://image.mux.com/${playbackId}/animated.gif?start=${thumbnailStart}&fps=30`
}

export const SuperThumbnail = ({ 
  id, name, playbackId, thumbnailStart, duration 
}) => {
  return  (
    <Link 
      key={id} 
      id={`superThumbnail.${id}`}
      to={`${paths.superClass.videos}/${id}`} 
      className='superThumbnailContainer clickable'
    >
      <h2>{name}</h2>
      <p>{getHumanizedDuration(duration)}</p>
      <img src={t.thumbnailSource(playbackId, thumbnailStart)} />
    </Link>
  )
}

export default SuperThumbnail