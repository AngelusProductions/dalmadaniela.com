import React from 'react'
import { connect } from 'react-redux'

import './styles/index.scss'

const MagicQuestion = ({ questionNumber, renderMagicQuestion }) => {

  return (
    <main className='magicQuestionContainer'>
      {renderMagicQuestion()}
    </main>
  )
}

const mapState = state => {
  return {
    
  }
}

const mapDispatch = dispatch => ({
  
})

export default connect(mapState, mapDispatch)(MagicQuestion)
