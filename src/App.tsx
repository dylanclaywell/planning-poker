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
    <>
      <Table></Table>
      <Card
        sequence={sequence}
        value={cardValue}
        setValue={(value) => dispatch(setValue(value))}
      />
    </>
  )
}
