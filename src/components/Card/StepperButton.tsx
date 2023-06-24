import clsx from 'clsx'

export type Props = {
  direction: 'up' | 'down'
  onClick: () => void
}

export function StepperButton({ onClick, direction }: Props) {
  return (
    <button
      onClick={onClick}
      className="text-gray-300 transition-colors hover:bg-gray-200 hover:text-gray-500 py-1 px-4 rounded-sm"
    >
      <i
        className={clsx('fa-solid', {
          'fa-arrow-up': direction === 'up',
          'fa-arrow-down': direction === 'down',
        })}
      ></i>
    </button>
  )
}
