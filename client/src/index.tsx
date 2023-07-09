import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from './store'
import registerServiceWorker from './registerServiceWorker'
import App from 'components/App'
import { AppProvider as PolarisProvider } from '@shopify/polaris'
import { freshHistory } from 'utils/history'
import { PersistGate } from 'redux-persist/integration/react'

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
