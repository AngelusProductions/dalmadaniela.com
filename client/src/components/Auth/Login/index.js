import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import HomeIcon from '../../UI/HomeIcon'
import { PasswordField, EmailField } from '../AuthTextFields'

import { paths } from '../../../constants/paths'
import { loginWithPassword } from '../../../api/login'
import { changeAuthFieldText } from '../../../actions/auth'
import { loginFailure, loginSuccess, loginRequest } from '../../../actions/login'

import './index.scss'
import '../index.scss'

const t = {
  title: 'Login',
  button: 'Submit'
}

const Login = props => {
  const navigate = useNavigate()

  const { 
    email, 
    password, 
    onChange, 
    onSubmit, 
    errors 
  } = props

  const handleLogIn = () => {
    onSubmit({
      email,
      password
    }).then(email => {
      if (email)
        navigate(paths.blog.page)
    })
  }

  const updateField = key => value => {
    onChange(key, value)
  }

  const validForm = () => {
    return !email && !password
  }

  const watchForEnter = event => {
    if (event.charCode === 13) {
      event.preventDefault()
      handleLogIn()
    }
  }

  return (
    <div id='loginPageContainer' className='authPageContainer'>
      <HomeIcon />
      <h1>{t.title}</h1>
      <div className='authFieldContainer' onKeyDown={watchForEnter}>
        <EmailField
          kind='login'
          text={email}
          onChange={updateField('email')}
          error={errors.email}
          label={null}
        />
        <PasswordField
          kind='login'
          text={password}
          onChange={updateField('password')}
          error={errors.password}
        />
      </div>
      <button
        id='loginButton'
        onClick={handleLogIn}
        disabled={validForm()}
        className='authButton clickable'
      >
        {t.button}
      </button>
    </div>
  )
}

const mapState = state => {
  const { email, password, loading, errors } = state.auth.login
  const currentUser = state.currentUser

  return {
    currentUser,
    email,
    password,
    loading,
    errors
  }
}

const mapDispatch = dispatch => ({
  onChange: (key, value) =>
    dispatch(changeAuthFieldText('login', key, value)),
  onSubmit: async payload => {
    dispatch(loginRequest)
    try {
      const { email, token } = await loginWithPassword(payload)

      dispatch(loginSuccess(email, token))
      return email
    } catch (e) {
      dispatch(loginFailure({ password: 'Incorrect email or password.' }))
      console.warn(e)
    }
  }
})

export default connect(
  mapState,
  mapDispatch
)(Login)
