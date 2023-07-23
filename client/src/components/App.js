import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'
import SuperClass from './SuperClass'
import MagicCalendars from './MagicCalendars'
import Blog from './Blog'
import Team from './Team'
import ContactUs from './ContactUs'
import GeniusMarketingServices from './GeniusMarketingServices'
// import Checkout from './Payment/Checkout'
// import PageHeader from './Navigation/PageHeader'
// import AuthLayout from './Auth/AuthLayout'

import { paths } from '../constants/routes'
import { loginWithJwt } from '../api/login'
import { loginSuccess, loginFailure, loginRequest } from '../actions/login'
import './app.scss'
import './fonts.scss'

const App = ({ currentUser, onBoot }) => {
  useEffect(() => {
    if (currentUser.token && !currentUser.loggedIn) {
      onBoot(currentUser.token)
    }
  })

  return (
    <Routes>
      <Route index element={<Home />}/>
      <Route path={paths.superClass} element={<SuperClass />} />
      <Route path={paths.magicCalendars} element={<MagicCalendars />} />
      <Route path={paths.blog} element={<Blog />} />
      <Route path={paths.team} element={<Team />} />
      <Route path={paths.contactUs} element={<ContactUs />} />
      <Route path={paths.geniusMarketingServices} element={<GeniusMarketingServices />} />
    </Routes>
  )
}

const mapState = state => {
  return {
    currentUser: state.currentUser
  }
}

const mapDispatch = dispatch => ({
  onBoot: async jwt => {
    dispatch(loginRequest)
    try {
      const response = await loginWithJwt(jwt)
      dispatch(loginSuccess(response.email, jwt))
    } catch (e) {
      dispatch(
        loginFailure({
          email: 'Failed to log you in automatically. Please log in again.'
        })
      )
    }
  }
})

export default connect(
  mapState,
  mapDispatch
)(App)
