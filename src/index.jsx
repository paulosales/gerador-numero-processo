import React from 'react'
import ReactDOM from 'react-dom'
import { NotificationContainer } from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import { Provider } from 'react-redux'
import store from './redux/store'
import App from './components/App'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <NotificationContainer />
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
