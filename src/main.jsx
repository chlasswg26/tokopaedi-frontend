import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../scss/styles.scss'
import { BrowserRouter } from './routers/browserHistory'
import { Provider as ReduxProvider } from 'react-redux'
import { store, persistor } from './redux/store'
import { injectStore } from './utils/http'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from 'react-hot-toast'

injectStore(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </ReduxProvider>

    <Toaster />
  </React.StrictMode>
)
