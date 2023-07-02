import clsx from 'clsx'
import { useEffect, useState } from 'react'

import { Value } from './Value'
import { StepperButton } from './StepperButton'

export type Props = {
  sequence?: 'default' | 'fibonacci'
  value: number
  setValue: (value: number) => void
  flipped?: boolean
  readOnly?: boolean
}

const fibonacci = [1, 2, 3, 5, 8, 13, 21]

function getClosestFibonacci(value: number, direction: 'up' | 'down') {
  const closestUp = fibonacci.find((n) => n > value)
  const closestDown = [...fibonacci].reverse().find((n) => n < value)

  return direction === 'up'
    ? closestUp ?? fibonacci[fibonacci.length - 1]
    : closestDown ?? fibonacci[0]
}

export function Front({
  sequence = 'default',
  value,
  setValue,
  flipped,
  readOnly,
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
              setValue(number)
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
          {!readOnly && (
            <div className="flex flex-col absolute left-[calc(100%_+_1rem)] top-1/2 -translate-y-1/2">
              <StepperButton
                onClick={() => {
                  const newValue =
                    sequence === 'default'
                      ? value + 1
                      : getClosestFibonacci(value, 'up') ??
                        fibonacci[fibonacci.length - 1]

                  setValue(newValue)
                  _setValue(newValue.toString())
                }}
                direction="up"
              />
              <StepperButton
                onClick={() => {
                  const newValue =
                    sequence === 'default'
                      ? value - 1
                      : getClosestFibonacci(value, 'down') ??
                        fibonacci[fibonacci.length - 1]

                  setValue(newValue)
                  _setValue(newValue.toString())
                }}
                direction="down"
              />
            </div>
          )}
        </div>
        <Value value={value} suit="hearts" upsideDown />
      </div>
    </div>
  )
}
