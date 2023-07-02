import type { Meta, StoryObj } from '@storybook/react'

import { Avatar as AvatarComponent } from './Avatar'

const meta: Meta<typeof AvatarComponent> = {
  component: AvatarComponent,
}

export default meta

type Story = StoryObj<typeof AvatarComponent>

export const Default: Story = {
  render: AvatarComponent,
  args: {
    eye: { spacing: 10, size: 15, height: 20, type: 'round' },
    mouth: {
      height: 15,
      width: 15,
      xPosition: 0,
      yPosition: 0,
      size: 50,
      type: 'happy',
    },
  },
}
