import { useState } from 'react'
import { ChromePicker } from 'react-color'

import { StepperButton } from './StepperButton'
import { fibonacci, getClosestFibonacci } from './utils'

export type Props = {
  sequence?: 'default' | 'fibonacci'
  value: number
  setValue?: (value: number) => void
  _setValue: (value: string) => void
  color: string
  setColor: (color: string) => void
  flipped?: boolean
  readOnly?: boolean
}

export function Controls({
  sequence = 'default',
  value,
  setValue,
  color,
  setColor,
  _setValue,
}: Props) {
  const [showColorPicker, setShowColorPicker] = useState(false)

  return (
    <>
      {showColorPicker && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0"
          onClick={() => setShowColorPicker(false)}
        ></div>
      )}
      <div className="w-12 absolute left-[calc(100%_+_1rem)] top-0 h-full">
        <div className="absolute top-4 left-1/2 -translate-x-1/2">
          <button
            onClick={() =>
              setShowColorPicker((showColorPicker) => !showColorPicker)
            }
          >
            <i className="fa-solid fa-palette text-gray-300 hover:text-gray-400"></i>
          </button>
          {showColorPicker && (
            <ChromePicker
              className="absolute top-full"
              color={color}
              onChange={(color) => setColor(color.hex)}
              onChangeComplete={(color) => {
                setColor(color.hex)
              }}
            />
          )}
        </div>
        <div className="flex flex-col h-full justify-center">
          <StepperButton
            onClick={() => {
              const newValue =
                sequence === 'default'
                  ? value + 1
                  : getClosestFibonacci(value, 'up') ??
                    fibonacci[fibonacci.length - 1]

              setValue?.(newValue)
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

              setValue?.(newValue)
              _setValue(newValue.toString())
            }}
            direction="down"
          />
        </div>
      </div>
    </>
  )
}
