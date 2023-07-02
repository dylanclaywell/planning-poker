import clsx from 'clsx'
import { useState } from 'react'

import { Value } from './Value'
import { fibonacci } from './utils'
import { Controls } from './Controls'

export type Props = {
  sequence?: 'default' | 'fibonacci'
  value: number
  setValue?: (value: number) => void
  flipped?: boolean
  readOnly?: boolean
  color: string
  setColor: (color: string) => void
}

export function Front({
  sequence = 'default',
  value,
  setValue,
  flipped,
  readOnly,
  color,
  setColor,
}: Props) {
  const [_value, _setValue] = useState<string>(value.toString())

  return (
    <div
      className={clsx(
        'border-8 w-44 bg-gray-300 border-gray-300 rounded-xl flex flex-col backface-hidden transition-transform duration-500',
        {
          'rotate-y-180': flipped,
        }
      )}
    >
      <div
        className={clsx(
          'border border-gray-300 rounded-lg flex flex-col bg-white'
        )}
      >
        <Value value={value} suit="hearts" />
        <div className="flex flex-grow relative justify-center">
          <input
            readOnly={readOnly}
            onChange={(e) => {
              if (readOnly) return

              const number = Number(e.target.value)
              if (isNaN(number)) return

              _setValue(e.target.value)
              setValue?.(number)
            }}
            maxLength={2}
            className={clsx('text-6xl text-center w-24', {
              'text-red-500':
                (sequence === 'fibonacci' &&
                  !fibonacci.includes(Number(_value))) ||
                (sequence === 'default' && isNaN(Number(_value))),
            })}
            value={_value}
          />
        </div>
        <Value value={value} suit="hearts" upsideDown />
      </div>

      {!readOnly && (
        <Controls
          sequence={sequence}
          value={value}
          setValue={setValue}
          _setValue={_setValue}
          color={color}
          setColor={setColor}
        />
      )}
    </div>
  )
}
