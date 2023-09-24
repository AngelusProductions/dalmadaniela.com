import React from 'react'
import { Link } from 'react-router-dom'

import { paths } from '../../../constants/paths'
import { getHumanizedDuration } from '../../../constants/time'

import './styles/index.scss'

const t = {
  thumbnailSource: (playbackId, thumbnailGIFStart) => `https://image.mux.com/${playbackId}/animated.gif?start=${thumbnailGIFStart}&fps=30`
}

export const SuperThumbnail = ({ 
  id, name, playbackId, thumbnailGIFStart, duration 
}) => {
  return  (
    <div className='superThumbnailContainer' key={id}>
      <Link 
        id={`superThumbnail.${id}`}
        to={`${paths.superClass.videos}/${id}`} 
        className='superThumbnail clickable'
      >
        <img src={t.thumbnailSource(playbackId, thumbnailGIFStart)} />
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