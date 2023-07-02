import { Provider } from 'react-redux'
import type { Meta, StoryObj } from '@storybook/react'

import { createStore } from '../store'
import { App } from '../App'

const meta: Meta = {
  title: 'Pages',
}

export default meta

type Story = StoryObj

const store = createStore({
  root: {
    pointSequence: 'fibonacci',
  },
})

const teamStore = createStore({
  team: {
    members: [
      {
        name: 'John',
      },
      {
        name: 'Jane',
      },
    ],
  },
})

function DefaultRender(args?: { store?: ReturnType<typeof createStore> }) {
  return (
    <Provider store={args?.store ?? store}>
      <App />
    </Provider>
  )
}

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

export const WithTeam: Story = {
  render: () => <DefaultRender store={teamStore} />,
  parameters: {
    layout: 'fullscreen',
  },
}
