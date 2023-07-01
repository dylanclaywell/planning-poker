import { Children } from 'react'

import { useTabSelector } from './store'

export type Props = {
  children: React.ReactNode
}

export function TabPanels({ children }: Props) {
  const arrayChildren = Children.toArray(children)
  const activeTabIndex = useTabSelector((state) => state.tab.activeTabIndex)

  return (
    <div className="py-4">
      {Children.map(arrayChildren, (child, index) => {
        if (index !== activeTabIndex) return null

        return child
      })}
    </div>
  )
}
