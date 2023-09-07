import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'

import './styles/index.scss'

const t = {
  title: 'SuperWatch'
}

export const SuperVideos = () => {

  return (
    <div id='superVideosContainer'>
    {t.title}
    </div>
  )
}

const mapState = state => {

}

const mapDispatch = dispatch => ({

})

export default connect(mapState, mapDispatch)(SuperVideos)