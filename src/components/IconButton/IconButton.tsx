import clsx from 'clsx'

export type Props = {
  children: React.ReactNode
  onClick: () => void
  isActive?: boolean
}

export function IconButton({ children, onClick, isActive }: Props) {
  return (
    <button
      className={clsx('w-10 h-10 flex items-center justify-center rounded-md', {
        'hover:bg-gray-300': !isActive,
        'bg-gray-300 hover:bg-gray-200': isActive,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
