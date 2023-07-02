import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { createStore } from '../../store'
import { Card as CardComponent } from './Card'

const meta: Meta<typeof CardComponent> = {
  component: CardComponent,
}

export default meta

type Story = StoryObj<typeof CardComponent>

const store = createStore()

function DefaultRender(args: Story['args']) {
  const [value, setValue] = useState(0)
  const [color, setColor] = useState('#00cc00')

  return (
    <CardComponent
      {...args}
      value={value}
      setValue={setValue}
      color={color}
      setColor={setColor}
    />
  )
}

function WithFibonacci(args: Story['args']) {
  const [value, setValue] = useState(1)
  const [color, setColor] = useState('#00cc00')

  return (
    <Provider store={store}>
      <CardComponent
        {...args}
        sequence="fibonacci"
        value={value}
        setValue={setValue}
        color={color}
        setColor={setColor}
      />
    </Provider>
  )
}

export const Default: Story = {
  render: DefaultRender,
}

export const WithFibonacciSequence: Story = {
  render: WithFibonacci,
}

export const Flipped: Story = {
  render: DefaultRender,
  args: {
    flipped: true,
    value: 0,
  },
}
