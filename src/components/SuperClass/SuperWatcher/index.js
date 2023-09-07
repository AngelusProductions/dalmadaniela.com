import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import './styles/index.scss'

const t = {
  title: 'SuperWatcher'
}

export const SuperWatcher = () => {

  return (
    <div id='superWatcherContainer'>
          <video controls muted>
              <source src="http://localhost:9000/video" type="video/mp4"></source>
          </video>
    </div>
  )
}

const mapState = state => {

}

const mapDispatch = dispatch => ({
  
})

export default connect(mapState, mapDispatch)(SuperWatcher)