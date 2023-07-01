import { Children, cloneElement, ReactElement, isValidElement } from 'react'
import { TabButton, Props as TabButtonProps } from './TabButton'

const tabButtonType = (<TabButton />).type

export type Props = {
  children?: React.ReactNode
}

function isTabButton(
  element: ReactElement
): element is ReactElement<TabButtonProps> {
  return element.type === tabButtonType
}

export function TabButtons({ children }: Props) {
  const arrayChildren = Children.toArray(children)

  return (
    <div className="space-x-2">
      {Children.map(arrayChildren, (child, index) => {
        if (!isValidElement(child)) return child

        if (!isTabButton(child)) return child

        return cloneElement(child, {
          index,
        })
      })}
    </div>
  )
}
