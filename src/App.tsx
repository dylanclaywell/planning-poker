import { useDispatch } from 'react-redux'
import { Card } from './components/Card/Card'
import { Table } from './components/Table/Table'
import { useAppSelector } from './hooks/redux'
import { setValue } from './slices/cardSlice'

export function App() {
  const dispatch = useDispatch()
  const sequence = useAppSelector((state) => state.root.pointSequence)
  const cardValue = useAppSelector((state) => state.card.value)

  return (
    <div className="flex-col">
      <div className="flex justify-center items-center flex-grow h-screen">
        <Table></Table>
      </div>
      <div className="absolute top-4 w-fit left-1/2 -translate-x-1/2">
        <Card
          sequence={sequence}
          value={cardValue}
          setValue={(value) => dispatch(setValue(value))}
        />
      </div>
      <div className="absolute bottom-4 w-fit left-1/2 -translate-x-1/2">
        <Card
          sequence={sequence}
          value={cardValue}
          setValue={(value) => dispatch(setValue(value))}
        />
      </div>
    </div>
  )
}
