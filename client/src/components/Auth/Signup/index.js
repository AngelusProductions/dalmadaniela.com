import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import HomeIcon from '../../UI/HomeIcon'
import { PasswordField, PasswordConfField, EmailField } from '../AuthTextFields'

import { paths } from '../../../constants/paths'
import { loginSuccess } from '../../../actions/login'
import { changeAuthFieldText } from '../../../actions/auth'
import { registerAccountSuccess, registerAccountFailure, registerAccountRequest } from '../../../actions/signup'
import { sendUserRegistrationRequest } from '../../../api/signup'
import { resolveSignupErrors } from '../../../utils/errorHandlers'

import './index.scss'
import '../index.scss'

const t = {
  title: 'Signup',
  button: 'Submit'
}

const Signup = props => {
  const navigate = useNavigate()

  const { 
    email, 
    password, 
    passwordConf, 
    onSubmit, 
    onChange, 
    errors 
  } = props

  const updateField = key => value => {
    onChange(key, value)
  }

  const handleSignUp = () => {
    onSubmit({
      email,
      password,
      passwordConf
    }).then(email => {
      if (email) 
        navigate(paths.blog)
    })
  }

  const validForm = () => {
    return !(!!email && !!password && !!passwordConf)
  }

  const watchForEnter = e => {
    if (e.charCode === 13) {
      e.preventDefault()
      handleSignUp()
    }
  }

  return (
    <div id='signupPageContainer' className='authPageContainer'>
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
        <PasswordConfField
          kind='login'
          text={passwordConf}
          onChange={updateField('passwordConf')}
          error={errors.passwordConf}
        />
      </div>
      <button
        id='signupButton'
        onClick={handleSignUp}
        disabled={validForm()}
        className='authButton clickable'
      >
        {t.button}
      </button>
    </div>
  )
}

const mapStateToProps = state => {
  const {
    email,
    password,
    passwordConf,
    loading,
    errors
  } = state.auth.signup

  return {
    email,
    password,
    passwordConf,
    loading,
    errors
  }
}

const mapDispatchToProps = dispatch => ({
  onChange: (key, value) => {
    dispatch(changeAuthFieldText('signup', key, value))
  },
  onSubmit: async (payload) => {
    dispatch(registerAccountRequest)
    try {
      const { email, token } = await sendUserRegistrationRequest(payload)
      dispatch(registerAccountSuccess())
      /**
       * POSTing to /signup will run through passport.js' login
       * middleware. So if there are no errors at this point we can log-in
       * the user without sending a separate request.
       */
      dispatch(loginSuccess(email, token))
      return email
    } catch (e) {
      const errors = resolveSignupErrors(e)
      dispatch(registerAccountFailure(errors))
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup)
