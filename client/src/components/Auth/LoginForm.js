import React from 'react'
import { connect } from 'react-redux'
import {
  Layout,
  Card,
  FormLayout,
  Button,
  DisplayText
} from '@shopify/polaris'

import { PasswordField, EmailField } from './AuthTextFields'

import { loginWithPassword } from '../../api/login'
import { changeAuthFieldText } from '../../actions/formAuth'
import { loginFailure, loginSuccess, loginRequest } from '../../actions/login'

import { paths } from '../../constants/paths'
import { pushToAppHistory } from '../../utils/history'

const LoginForm = props => {
  const { email, password, onChange, onSubmit, currentUser, errors } = props

  const handleLogIn = () => {
    onSubmit({
      email,
      password
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

  const loggedOutMarkup = () => {
    return (
      <Layout.Section>
        <Card sectioned>
          <FormLayout>
            <div onKeyPress={watchForEnter}>
              <EmailField
                kind='login'
                text={email}
                onChange={updateField('email')}
                error={errors.email}
              />
              <PasswordField
                kind='login'
                text={password}
                onChange={updateField('password')}
                error={errors.password}
              />
            </div>
            <Button
              primary
              icon='circleChevronRight'
              loading={props.loading}
              onClick={handleLogIn}
              disabled={validForm()}
            >
              Log in.
            </Button>
          </FormLayout>
        </Card>
      </Layout.Section>
    )
  }

  const loggedInMarkup = user => {
    return (
      <Layout.Section>
        <Card sectioned>
          <DisplayText size='medium'>
            You're logged in with the email '{user.email}'.
          </DisplayText>
        </Card>
      </Layout.Section>
    )
  }

  return currentUser.email ? loggedInMarkup(currentUser) : loggedOutMarkup()
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
    } catch (e) {
      dispatch(loginFailure({ password: 'Incorrect email or password.' }))
      console.warn(e)
    }
  }
})

export default connect(
  mapState,
  mapDispatch
)(LoginForm)
