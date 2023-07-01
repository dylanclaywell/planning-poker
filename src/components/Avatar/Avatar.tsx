import { EyeType, MouthType } from '../../slices/avatarSlice'

type MouthProps = {
  height: number
  width: number
  size: number
  xPosition: number
  yPosition: number
}

type EyeProps = {
  height: number
  spacing: number
  size: number
}

export type Props = {
  eye: {
    type: EyeType
  } & EyeProps
  mouth: {
    type: MouthType
  } & MouthProps
}

function RoundEye({
  side,
  height,
  spacing,
  size,
}: {
  side: 'left' | 'right'
} & EyeProps) {
  return (
    <div
      className="rounded-full absolute bg-black"
      style={{
        width: `${size / 16}rem`,
        height: `${size / 16}rem`,
        top: `calc(0% + ${height / 16}rem)`,
        left: side === 'left' ? `calc(50% + ${spacing / 16}rem)` : undefined,
        right: side === 'right' ? `calc(50% + ${spacing / 16}rem)` : undefined,
      }}
    ></div>
  )
}

function HappyEye({
  side,
  height,
  spacing,
  size,
}: {
  side: 'left' | 'right'
} & EyeProps) {
  return (
    <div
      className="rounded-full absolute bg-black"
      style={{
        borderRadius: `${size / 16}rem ${size / 16}rem 0 0`,
        width: `${size / 16}rem`,
        height: `${size / 2 / 16}rem`,
        top: `calc(0% + ${height / 16}rem)`,
        left: side === 'left' ? `calc(50% + ${spacing / 16}rem)` : undefined,
        right: side === 'right' ? `calc(50% + ${spacing / 16}rem)` : undefined,
      }}
    ></div>
  )
}

function FlatEye({
  side,
  height,
  spacing,
  size,
}: {
  side: 'left' | 'right'
} & EyeProps) {
  return (
    <div
      className="rounded-full absolute bg-black"
      style={{
        width: `${size / 16}rem`,
        height: `${size / 2 / 16}rem`,
        top: `calc(0% + ${height / 16}rem)`,
        left: side === 'left' ? `calc(50% + ${spacing / 16}rem)` : undefined,
        right: side === 'right' ? `calc(50% + ${spacing / 16}rem)` : undefined,
      }}
    ></div>
  )
}

function Eye(
  args: {
    type: 'round' | 'happy' | 'flat'
    side: 'left' | 'right'
  } & EyeProps
) {
  switch (args.type) {
    case 'round':
      return <RoundEye {...args} />
    case 'happy':
      return <HappyEye {...args} />
    case 'flat':
      return <FlatEye {...args} />
  }
}

function HappyMouth({ size, height, width, xPosition, yPosition }: MouthProps) {
  return (
    <div
      className="rounded-full absolute bg-black"
      style={{
        borderRadius: `0 0 ${size / 16}rem ${size / 16}rem`,
        width: `${size / 16}rem`,
        height: `${size / 2 / 16}rem`,
        transform: `translateX(-50%) scaleX(${width / 16}) scaleY(${
          height / 16
        }) `,
        top: `calc(50% + ${yPosition / 16}rem)`,
        left: `calc(50% + ${xPosition / 16}rem)`,
      }}
    ></div>
  )
}

function FlatMouth({ size, height, width, xPosition, yPosition }: MouthProps) {
  return (
    <div
      className="rounded-full absolute bg-black"
      style={{
        width: `${size / 16}rem`,
        height: `${size / 2 / 16}rem`,
        transform: `translateX(-50%) scaleX(${width / 16}) scaleY(${
          height / 16
        }) `,
        top: `calc(50% + ${yPosition / 16}rem)`,
        left: `calc(50% + ${xPosition / 16}rem)`,
      }}
    ></div>
  )
}

function Mouth(
  args: {
    type: MouthType
  } & MouthProps
) {
  switch (args.type) {
    case 'happy':
      return <HappyMouth {...args} />
    case 'flat':
      return <FlatMouth {...args} />
  }
}

export function Avatar({ eye, mouth }: Props) {
  return (
    <div className="w-20 h-20 rounded-full bg-orange-100 relative">
      <Eye side={'left'} {...eye} />
      <Eye side={'right'} {...eye} />
      <Mouth {...mouth} />
    </div>
  )
}
