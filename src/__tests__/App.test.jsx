import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import App from '../components/App'
import { ToastProvider } from '../components/Toast'
import store from '../redux/store'

test('renders Generate Button', () => {
  const { getByText } = render(
    <Provider store={store}>
      <ToastProvider>
        <App />
      </ToastProvider>
    </Provider>
  )
  const linkElement = getByText(/Gerar/i)
  expect(linkElement).toBeInTheDocument()
})
