import * as React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logoutUser } from '../../../actions/login'
import { paths } from '../../../constants/paths'
import { i } from '../../../constants/data/assets'

import './styles/index.scss'

const t = {
  signup: 'Sign up',
  login: 'Log In',
  logout: 'Log Out',
}

const UserInfo = ({ currentUser, backgroundColor, redirect, onLogoutUser }) => {
  return (
    <div id='userInfoContainer'>
      {currentUser.loggedIn ? (
        <>
          <img className='userIcon' src={i.icons.user} />
          <span>{currentUser.email}</span>
          <a 
            id='logoutButton' 
            onClick={() => onLogoutUser()}
            className={`clickable ${backgroundColor}Background`}
          >
            {t.logout}
          </a>
        </>
      ) : (
        <>
          <Link 
            id='loginButton' 
            to={`${paths.auth.login}${redirect ? `?redirect=${redirect}` : ''}`} 
            className={`clickable ${backgroundColor}Background login`}
          >
            {t.login}
          </Link>
          <Link 
            id='signupButton' 
            to={`${paths.auth.signup}${redirect ? `?redirect=${redirect}` : ''}`} 
            className={`clickable ${backgroundColor}Background signup`}
          >
            {t.signup}
          </Link>
        </>
      )}
    </div>
  )
}

const mapState = state => {
  return {
    currentUser: state.currentUser,
  }
}

const mapDispatch = dispatch => ({
  onLogoutUser: () => {
    dispatch(logoutUser)
  }
})

export default connect(mapState, mapDispatch)(UserInfo)
