import * as React from 'react'
import { TextField } from '@shopify/polaris'

import './index.scss'

const PasswordField = ({ text, onChange, kind, error }) => {
  return (
    <TextField
      name={`password-${kind}`}
      type="password"
      placeholder="At least six characters."
      value={text}
      onChange={onChange}
      error={error}
      min={6}
    />
  )
}

const PasswordConfField = ({ text, onChange, kind, error }) => {
  return (
    <TextField
      spellCheck={false}
      name={`passwordConf-${kind}`}
      type="password"
      value={text}
      placeholder="Same as your password."
      min={6}
      onChange={onChange}
      error={error}
    />
  )
}

const EmailField = ({ text, onChange, kind, error }) => {
  return (
    <TextField
      autoComplete={false}
      name={`email-${kind}`}
      type="email"
      value={text}
      placeholder="e.g. name@business.com"
      onChange={onChange}
      error={error}
      spellCheck={false}
    />
  )
}

export { 
  PasswordField, 
  PasswordConfField, 
  EmailField 
}
