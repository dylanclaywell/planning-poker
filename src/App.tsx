import { useDispatch } from 'react-redux'

import { Card } from './components/Card/Card'
import { Table } from './components/Table/Table'
import { useAppSelector } from './hooks/redux'
import { setColor, setValue } from './slices/cardSlice'

export function App() {
  const dispatch = useDispatch()
  const sequence = useAppSelector((state) => state.root.pointSequence)
  const cardValue = useAppSelector((state) => state.card.value)
  const teamMembers = useAppSelector((state) => state.team.members)
  const color = useAppSelector((state) => state.card.color)

  return (
    <div className="flex-col">
      <div className="flex justify-center items-center flex-grow h-screen">
        <Table></Table>
      </div>
      <div className="absolute top-4 w-fit left-1/2 -translate-x-1/2">
        {teamMembers.map((member) => {
          return (
            <div key={member.name} className="flex flex-col items-center">
              <div className="text-2xl font-bold">{member.name}</div>
              <Card
                sequence={sequence}
                readOnly
                flipped
                color="#00cc00"
                setColor={() => undefined}
              />
            </div>
          )
        })}
      </div>
      <div className="absolute bottom-4 w-fit left-1/2 -translate-x-1/2">
        <Card
          sequence={sequence}
          value={cardValue}
          setValue={(value) => dispatch(setValue(value))}
          color={color}
          setColor={(color) => dispatch(setColor(color))}
        />
      </div>
    </div>
  )
}
