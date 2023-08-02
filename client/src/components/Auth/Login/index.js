import React from 'react'
import { connect } from 'react-redux'
import { Button } from '@shopify/polaris'
import { useNavigate } from 'react-router-dom'

import { PasswordField, EmailField } from '../AuthTextFields'

import { loginWithPassword } from '../../../api/login'
import { changeAuthFieldText } from '../../../actions/formAuth'
import { loginFailure, loginSuccess, loginRequest } from '../../../actions/login'

import { paths } from '../../../constants/paths'
import { pushToAppHistory } from '../../../utils/history'

import '../index.scss'
import HomeIcon from '../../UI/HomeIcon'

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
      debugger
      if (!!email) {
        navigate(paths.blog)
      }
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
    <div className='authPageContainer'>
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
      {/* <Button
        id='authButton'
        loading={props.loading}
        onClick={handleLogIn}
        disabled={validForm()}
        accessibilityLabel='Log in'
      >
        {t.button}
      </Button> */}
      <button
        id='authButton'
        onClick={handleLogIn}
        disabled={validForm()}
      >
        {t.button}
      </button>
    </div>
  )
}

const mapState = state => {
  const { email, password, loading, errors } = state.authForms.login
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
      pushToAppHistory(paths.home)
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
