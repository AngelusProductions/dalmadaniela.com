import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { paths } from '../../../constants/paths'
import { getHumanizedDuration } from '../../../constants/time'

import './styles/index.scss'

const t = {
  title: 'Welcome to',
  superclass: 'SuperClass'
}

export const SuperVideos = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch('http://localhost:9000/superclass/metadata')
      .then(response => response.json())
      .then(videos => setVideos(videos))
  }, [])

  return (
    <div id='superVideosPageContainer'>
      <h1>{t.title} <span>{t.superclass}</span></h1>
      {videos.map(({ id, name, duration }) => (
        <Link to={`${paths.superClass.videos}/${id}`} key={id} className='superVideoContainer clickable'>
          <h2>{name}</h2>
          <p>{getHumanizedDuration(duration)}</p>
        </Link>
      ))}
    </div>
  )
}

const mapState = state => {

}

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(SuperVideos)