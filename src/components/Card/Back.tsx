import clsx from 'clsx'

export type Props = {
  flipped?: boolean
}

export function Back({ flipped }: Props) {
  return (
    <div
      className={clsx(
        'border-8 bg-gray-300 border-gray-300 w-full h-full absolute top-0 left-0 rounded-xl backface-hidden transition-transform duration-500',
        {
          'rotate-y-180': !flipped,
        }
      )}
    >
      <div className="w-full h-full bg-blue-800 rounded-lg"></div>
    </div>
  )
}
