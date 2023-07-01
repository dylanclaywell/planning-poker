import clsx from 'clsx'
import { ChangeEvent } from 'react'

export type Props = {
  label: string
  value: number
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
  min?: number
  max?: number
  fullWidth?: boolean
}

export function Slider({ label, value, onChange, min, max, fullWidth }: Props) {
  return (
    <div className="space-x-4 flex items-center">
      <label
        className={clsx('space-x-2 flex items-center justify-between', {
          'w-full': fullWidth,
        })}
      >
        <span>{label}</span>
        <input
          className={`appearance-none h-2 rounded-sm bg-gray-300 
            [&::-webkit-slider-thumb]:appearance-none 
            [&::-webkit-slider-thumb]:h-6
            [&::-webkit-slider-thumb]:w-3
            [&::-webkit-slider-thumb]:bg-gray-400
            [&::-webkit-slider-thumb]:hover:bg-cyan-700
            [&::-webkit-slider-thumb]:rounded-sm
            [&::-moz-range-thumb]:appearance-none
            [&::-moz-range-thumb]:h-6
            [&::-moz-range-thumb]:w-3
            [&::-moz-range-thumb]:bg-gray-400
            [&::-moz-range-thumb]:hover:bg-cyan-700
            [&::-moz-range-thumb]:rounded-sm
          `}
          type="range"
          value={value}
          onChange={onChange}
          min={min}
          max={max}
        />
      </label>
      <span className="w-4">{value}</span>
    </div>
  )
}
