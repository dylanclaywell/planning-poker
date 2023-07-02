import { Provider } from 'react-redux'
import type { Meta, StoryObj } from '@storybook/react'

import { createStore } from '../store'
import { App } from '../App'

const meta: Meta = {
  title: 'Pages',
}

export default meta

type Story = StoryObj

function DefaultRender() {
  const store = createStore()

  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

const store = createStore({
  root: {
    pointSequence: 'fibonacci',
  },
})

function WithFibonacciRender() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export const Default: Story = {
  render: () => <DefaultRender />,
  parameters: {
    layout: 'fullscreen',
  },
}

export const WithFibonacci: Story = {
  render: () => <WithFibonacciRender />,
  parameters: {
    layout: 'fullscreen',
  },
}
