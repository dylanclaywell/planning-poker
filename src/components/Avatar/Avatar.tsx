import clsx from 'clsx'

export type Props = {
  eye: {
    type: 'round' | 'happy'
    height: number
    spacing: number
    size: number
  }
  mouth: {
    type: 'flat' | 'happy' | 'frown'
    height: number
    size: number
    offset: number
  }
}

function RoundEye({
  side,
  height,
  spacing,
  size,
}: {
  side: 'left' | 'right'
  height: number
  spacing: number
  size: number
}) {
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
  height: number
  spacing: number
  size: number
}) {
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
  height: number
  spacing: number
  size: number
}) {
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

function Eye(args: {
  type: 'round' | 'happy' | 'flat'
  side: 'left' | 'right'
  height: number
  spacing: number
  size: number
}) {
  switch (args.type) {
    case 'round':
      return <RoundEye {...args} />
    case 'happy':
      return <HappyEye {...args} />
    case 'flat':
      return <FlatEye {...args} />
  }
}

function HappyMouth({
  size,
  height,
  offset,
}: {
  size: number
  height: number
  offset: number
}) {
  return (
    <div
      className="rounded-full absolute bg-black -translate-x-1/2"
      style={{
        borderRadius: `0 0 ${size / 16}rem ${size / 16}rem`,
        width: `${size / 16}rem`,
        height: `${size / 2 / 16}rem`,
        top: `calc(50% + ${height / 16}rem)`,
        left: `calc(50% - ${offset / 16}rem)`,
      }}
    ></div>
  )
}

function Mouth(args: {
  type: 'happy' | 'flat' | 'frown'
  size: number
  height: number
  offset: number
}) {
  switch (args.type) {
    case 'happy':
      return <HappyMouth {...args} />
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
