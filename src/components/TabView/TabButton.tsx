import clsx from 'clsx'
import { setActiveTabIndex, useTabDispatch, useTabSelector } from './store'

export type Props = {
  children?: React.ReactNode
  index?: number
}

export function TabButton({ children, index }: Props) {
  const dispatch = useTabDispatch()
  const activeTabIndex = useTabSelector((state) => state.tab.activeTabIndex)
  const isActive = activeTabIndex === index

  return (
    <button
      className={clsx('px-8 py-2 rounded-md', {
        'bg-cyan-700 hover:bg-cyan-600 text-white': isActive,
        'hover:bg-gray-300': !isActive,
      })}
      onClick={() => dispatch(setActiveTabIndex(index ?? 0))}
    >
      {children}
    </button>
  )
}
