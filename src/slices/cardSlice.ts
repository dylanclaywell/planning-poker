import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type State = {
  value: number
  color: string
}

const initialState: State = {
  value: 0,
  color: '#00cc00',
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
    setColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload
    },
  },
})

export const cardReducer = cardSlice.reducer

export const { setValue, setColor } = cardSlice.actions
