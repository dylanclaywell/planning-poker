import type { PointSequence } from '../../slices/rootSlice'
import { Front } from './Front'
import { Back } from './Back'

export type Props = {
  sequence?: PointSequence
  value: number
  setValue: (value: number) => void
  flipped?: boolean
  readOnly?: boolean
}

export function Card({
  sequence = 'default',
  value,
  setValue,
  flipped,
  readOnly,
}: Props) {
  return (
    <div className="relative w-fit h-fit">
      <Front
        sequence={sequence}
        value={value}
        setValue={setValue}
        flipped={flipped}
        readOnly={readOnly}
      />
      <Back flipped={flipped} />
    </div>
  )
}
