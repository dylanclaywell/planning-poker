import clsx from 'clsx'

export type Props = {
  value: number
  suit: 'spades' | 'hearts' | 'clubs' | 'diamonds'
  upsideDown?: boolean
  className?: string
}

export function Value({ value, suit, upsideDown, className }: Props) {
  return (
    <div
      className={clsx(
        'p-2 text-2xl pointer-events-none select-none',
        {
          'rotate-180': upsideDown,
        },
        className
      )}
    >
      <div className="text-red-800 flex flex-col items-center w-fit">
        {value}
        <i
          className={clsx('text-sm fa-solid', {
            'fa-heart': suit === 'hearts',
          })}
        ></i>
      </div>
    </div>
  )
}
