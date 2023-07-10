import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { AppProvider as PolarisProvider } from '@shopify/polaris'
import { PersistGate } from 'redux-persist/integration/react'

import App from './components/App'

import configureStore from './store'
import { freshHistory } from './utils/history'
import registerServiceWorker from './registerServiceWorker'

const { store, persistor } = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <PolarisProvider>
        <Router history={freshHistory}>
          <App />
        </Router>
      </PolarisProvider>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
