import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Props, Slider as SliderComponent } from './Slider'

const meta: Meta<typeof SliderComponent> = {
  component: SliderComponent,
}

export default meta

type Story = StoryObj<typeof SliderComponent>

function DefaultRender(args: Props) {
  const [value, setValue] = useState(args.value ?? 0)

  return (
    <SliderComponent
      {...args}
      value={value}
      onChange={(e) => setValue(Number(e.target.value))}
    />
  )
}

export const Default: Story = {
  render: DefaultRender,
  args: {
    label: 'Label',
    value: 0,
  },
}

export const WithMinMax: Story = {
  render: DefaultRender,
  args: {
    label: 'Label',
    value: 10,
    min: 10,
    max: 20,
  },
}
