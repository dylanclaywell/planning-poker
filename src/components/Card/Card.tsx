import clsx from 'clsx'
import { useState } from 'react'
import { StepperButton } from './StepperButton'
import { Value } from './Value'
import type { PointSequence } from '../../slices/rootSlice'

export type Props = {
  sequence?: PointSequence
  value: number
  setValue: (value: number) => void
}

const fibonacci = [1, 2, 3, 5, 8, 13, 21]

function getClosestFibonacci(value: number, direction: 'up' | 'down') {
  const closestUp = fibonacci.find((n) => n > value)
  const closestDown = [...fibonacci].reverse().find((n) => n < value)

  return direction === 'up'
    ? closestUp ?? fibonacci[fibonacci.length - 1]
    : closestDown ?? fibonacci[0]
}

export function Card({ sequence = 'default', value, setValue }: Props) {
  const [_value, _setValue] = useState<string>(value.toString())

  return (
    <div className="border-4 w-44 border-gray-300 rounded-xl flex flex-col">
      <Value value={value} suit="hearts" />
      <div className="flex flex-grow relative justify-center">
        <input
          onChange={(e) => {
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
      </div>
      <Value value={value} suit="hearts" flipped />
    </div>
  )
}
