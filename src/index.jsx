import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './components/App'
import { ToastProvider } from './components/Toast'
import './index.css'
const hostname = window.location.hostname.toLowerCase()
if (
  hostname === 'processogerador.paulosales.com.br' ||
  hostname === 'www.processogerador.paulosales.com.br'
) {
  window.location.replace('https://stackkit.com.br/#processo-generator')
} else {
  const root = createRoot(document.getElementById('root'))

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <ToastProvider>
          <App />
        </ToastProvider>
      </Provider>
    </React.StrictMode>
  )
}
