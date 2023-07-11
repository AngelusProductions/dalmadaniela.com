import React from 'react'
import { connect } from 'react-redux'
import { Layout, FormLayout, Card, Button } from '@shopify/polaris'

import { PasswordField, PasswordConfField, EmailField } from './AuthTextFields'

import { paths } from 'constants/routes'
import { loginSuccess } from 'actions/login'
import { changeAuthFieldText } from 'actions/formAuth'
import { registerAccountSuccess, registerAccountFailure, registerAccountRequest } from 'actions/signup'
import { sendUserRegistrationRequest } from 'api/signup'

import { pushToAppHistory } from 'utils/history'
import { resolveSignupErrors } from 'utils/errorHandlers'

const SignupForm = props => {
  const { email, password, passwordConf, onSubmit, onChange, errors } = props

  const updateField = key => value => {
    onChange(key, value)
  }

  const handleSignUp = () => {
    onSubmit({
      email,
      password,
      passwordConf
    })
  }

  const validForm = () => {
    return !(!!email && !!password && !!passwordConf)
  }

  const watchForEnter = event => {
    if (event.charCode === 13) {
      event.preventDefault()
      handleSignUp()
    }
  }

  return (
    <Layout.Section>
      <Card sectioned>
        <FormLayout>
          <div onKeyPress={watchForEnter}>
            <EmailField
              kind="login"
              text={email}
              onChange={updateField('email')}
              error={errors.email}
            />
            <PasswordField
              kind="login"
              text={password}
              onChange={updateField('password')}
              error={errors.password}
            />
            <PasswordConfField
              kind="login"
              text={passwordConf}
              onChange={updateField('passwordConf')}
              error={errors.passwordConf}
            />
          </div>
          <Button
            primary
            loading={props.loading}
            icon="circleChevronRight"
            onClick={handleSignUp}
            disabled={validForm()}
            accessibilityLabel="Sign up"
          >
            Sign up.
          </Button>
        </FormLayout>
      </Card>
    </Layout.Section>
  )
}

const mapStateToProps = state=> {
  const {
    email,
    password,
    passwordConf,
    loading,
    errors
  } = state.authForms.signup

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
      const data = await sendUserRegistrationRequest(payload)
      dispatch(registerAccountSuccess())
      /**
       * POSTing to /signup will run through passport.js' login
       * middleware. So if there are no errors at this point we can log-in
       * the user without sending a separate request.
       */
      dispatch(loginSuccess(data.email, data.token))
      pushToAppHistory(paths.home)
    } catch (e) {
      const errors = resolveSignupErrors(e)
      dispatch(registerAccountFailure(errors))
    }
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm)
