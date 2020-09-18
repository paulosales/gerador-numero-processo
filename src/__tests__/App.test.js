import React from 'react'
import { render } from '@testing-library/react'
import App from '../components/App'
import { Provider } from 'react-redux'
import store from '../redux/store'

test('renders Generate Button', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  )
  const linkElement = getByText(/Gerar/i)
  expect(linkElement).toBeInTheDocument()
})
