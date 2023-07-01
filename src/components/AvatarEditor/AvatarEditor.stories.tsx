import { Provider } from 'react-redux'
import type { Meta, StoryObj } from '@storybook/react'

import { createStore } from '../../store'

import { AvatarEditor as AvatarEditorComponent } from './AvatarEditor'

const meta: Meta<typeof AvatarEditorComponent> = {
  component: AvatarEditorComponent,
}

export default meta

type Story = StoryObj<typeof AvatarEditorComponent>

const store = createStore({
  root: {
    pointSequence: 'fibonacci',
  },
})

function DefaultRender() {
  return (
    <Provider store={store}>
      <AvatarEditorComponent />
    </Provider>
  )
}

export const Default: Story = {
  render: DefaultRender,
  args: {},
}
