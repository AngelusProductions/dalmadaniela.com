import React from 'react'
import { Card, Layout } from '@shopify/polaris'
import StripeCheckout from 'react-stripe-checkout'
import './index.scss'

import { sendPaymentRequest } from 'api/stripe'
import { STRIPE_PUBLISHABLE_TEST_KEY } from '../../constants/config'

const Checkout = ({ name, description, amount }) => {
  const stripeCheckoutProps = {
    label: 'Pay With Card',
    name,
    description,
    token: sendPaymentRequest(amount, description),
    amount,
    stripeKey: STRIPE_PUBLISHABLE_TEST_KEY,
    currency: 'USD'
  }

  return (
    <Layout.Section>
      <Card sectioned>
        <StripeCheckout {...stripeCheckoutProps} />
      </Card>
    </Layout.Section>
  )
}

export default Checkout