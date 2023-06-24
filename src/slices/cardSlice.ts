import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type State = {
  value: number
}

const initialState: State = {
  value: 0,
}

const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})

export const cardReducer = cardSlice.reducer

export const { setValue } = cardSlice.actions
