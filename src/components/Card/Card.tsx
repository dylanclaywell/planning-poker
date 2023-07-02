import type { PointSequence } from '../../slices/rootSlice'
import { Front } from './Front'
import { Back } from './Back'

export type Props = {
  sequence?: PointSequence
  value?: number
  setValue?: (value: number) => void
  color: string
  setColor: (color: string) => void
  flipped?: boolean
  readOnly?: boolean
}

export function Card({
  sequence = 'default',
  value,
  setValue,
  flipped,
  readOnly,
  color,
  setColor,
}: Props) {
  return (
    <div className="relative w-fit h-fit">
      <Front
        sequence={sequence}
        value={value ?? 0}
        setValue={setValue}
        flipped={flipped}
        readOnly={readOnly}
        color={color}
        setColor={setColor}
      />
      <Back color={color} flipped={flipped} />
    </div>
  )
}
