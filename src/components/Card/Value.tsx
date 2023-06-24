import clsx from 'clsx'

export type Props = {
  value: number
  suit: 'spades' | 'hearts' | 'clubs' | 'diamonds'
  flipped?: boolean
}

export function Value({ value, suit, flipped }: Props) {
  return (
    <div
      className={clsx('p-2 text-2xl', {
        'rotate-180': flipped,
      })}
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
