import { compose } from 'redux'
import {
  PRODUCTION_API_HOSTNAME,
  API_VERSION,
  STRIPE_PUBLISHABLE_LIVE_KEY,
  STRIPE_PUBLISHABLE_TEST_KEY,
} from "../constants/config";

export const configureApiRoot = () => {
  const hostname = window && window.location && window.location.hostname
  switch (hostname) {
    case 'localhost':
      return `http://localhost:4000/api/v${API_VERSION}`
    default:
      return `https://${PRODUCTION_API_HOSTNAME}/api/v${API_VERSION}`
  }
}

export const configureStripeKey = () => {
  const hostname = window && window.location && window.location.hostname;
  switch (hostname) {
    case "localhost":
      return STRIPE_PUBLISHABLE_TEST_KEY;
    default:
      return STRIPE_PUBLISHABLE_LIVE_KEY;
  }
};

export const devtools = window['__REDUX_DEVTOOLS_EXTENSION__']
  ? window['__REDUX_DEVTOOLS_EXTENSION__']()
  : compose