import { Provider } from 'react-redux'

import { createStore } from './store'

export type Props = {
  children: React.ReactNode
}

const store = createStore()

export function TabView({ children }: Props) {
  return (
    <Provider store={store}>
      <div className="space-x-2">{children}</div>
    </Provider>
  )
}
