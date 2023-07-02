import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Card as CardComponent } from './Card'

const meta: Meta<typeof CardComponent> = {
  component: CardComponent,
}

export default meta

type Story = StoryObj<typeof CardComponent>

function DefaultRender() {
  const [value, setValue] = useState(0)
  return <CardComponent value={value} setValue={setValue} />
}

function WithFibonacci() {
  const [value, setValue] = useState(1)
  return (
    <CardComponent sequence="fibonacci" value={value} setValue={setValue} />
  )
}

export const Default: Story = {
  render: () => <DefaultRender />,
}

export const WithFibonacciSequence: Story = {
  render: () => <WithFibonacci />,
}

export const Flipped: Story = {
  render: CardComponent,
  args: {
    flipped: true,
    value: 0,
  },
}
