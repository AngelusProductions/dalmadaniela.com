import React, { useEffect } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { connect } from 'react-redux'

import Home from './Home'

import SuperClass from './SuperClass'
import SuperVideos from './SuperClass/SuperVideos'
import SuperWatcher from './SuperClass/SuperWatcher'

import MagicCalendars from './MagicCalendars'
import MagicCheckout from './MagicCalendars/MagicCheckout'

import Blog from './Blog'
import AllBlogPosts from './Blog/AllBlogPosts'
import BlogPost from './Blog/BlogPost'
import CreateBlogPost from './Blog/CreateBlogPost'

import Team from './Team'
import ContactUs from './ContactUs'
import GeniusMarketingServices from './GeniusMarketingServices'
import Signup from './Auth/Signup'
import Login from './Auth/Login'

import { paths } from '../constants/paths'
import { loginWithJwt } from '../api/login'
import { loginSuccess, loginFailure, loginRequest } from '../actions/login'
import './app.scss'
import './fonts.scss'
import './colors.scss'

const App = ({ currentUser, onBoot }) => {
  useEffect(() => {
    if (currentUser && currentUser.token && !currentUser.loggedIn) {
      onBoot(currentUser.token)
    }
  })

  return (
    <Routes>
      <Route index element={<Home />}/>

      <Route path={paths.superClass.page} element={<SuperClass />} />
      <Route path={paths.superClass.videos} element={<SuperVideos />} />
      <Route path={paths.superClass.watch} element={<SuperWatcher />} />
      
      <Route path={paths.magicCalendars.page} element={<MagicCalendars />} />
      <Route path={paths.magicCalendars.checkout} element={<MagicCheckout />} />

      <Route path={paths.blog.page} element={<Blog />} />
      <Route path={paths.blog.allBlogPosts} element={<AllBlogPosts />} />
      <Route path={paths.blog.blogPost} element={<BlogPost />} />
      <Route path={paths.blog.create} element={<CreateBlogPost />} />
      
      <Route path={paths.team} element={<Team />} />
      <Route path={paths.contactUs} element={<ContactUs />} />
      <Route path={paths.geniusMarketingServices} element={<GeniusMarketingServices />} />

      <Route path={paths.auth.login} element={<Login />} />
      <Route path={paths.auth.signup} element={<Signup />} />
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
