import React from 'react'
import { connect } from 'react-redux'

import HomeIcon from '../../UI/HomeIcon'
import BackIcon from '../../UI/BackIcon'

import { i } from '../../../constants/data/assets'
import { paths } from '../../../constants/paths'
import { setMagicSpeed } from '../../../actions/magicCalendars'

import t from './text.js'
import './styles/index.scss'

const MagicCheckout = ({ magicSpeed, setMagicSpeed }) => {
  const onMagicSpeedClick = speed => {
    setMagicSpeed(speed)
  }

  return (
    <main id='magicCheckoutPage'>
      <HomeIcon />
      <BackIcon path={paths.magicCalendars.page} />
      
      <h1>{t.title}</h1>
      <img id='magicCheckoutMagic' src={i.stars.starSwirl} />
      <div id='magicCheckoutMagicSpeedsContainer'>
        <label>{t.yourMagicSpeed}</label>
        <div id='magicCheckoutMagicSpeedsList'>
          <button 
            onClick={() => setMagicSpeed('standard')}
            className={`magicSpeedButton ${magicSpeed === 'standard' ? 'active' : 'inactive'} clickable`}
          >{t.magicSpeeds.standard}</button>
          <button 
            onClick={() => setMagicSpeed('fast')}
            className={`magicSpeedButton ${magicSpeed === 'fast' ? 'active' : 'inactive'} clickable`}
          >{t.magicSpeeds.fast}</button>
          <button 
            onClick={() => setMagicSpeed('superfast')}
            className={`magicSpeedButton ${magicSpeed === 'superfast' ? 'active' : 'inactive'} clickable`}
          >{t.magicSpeeds.superFast}</button>
        </div>
      </div>
    </main>
  )
}

const mapState = state => {
  return {
    magicSpeed: state.magicCalendars.magicSpeed
  }
}

const mapDispatch = dispatch => ({
  setMagicSpeed: async speed => {
    dispatch(setMagicSpeed(speed))
  }
})


export default connect(mapState, mapDispatch)(MagicCheckout)
