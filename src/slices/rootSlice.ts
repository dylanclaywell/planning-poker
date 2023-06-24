import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type PointSequence = 'default' | 'fibonacci'

export type State = {
  pointSequence: PointSequence
}

const initialState: State = {
  pointSequence: 'default',
}

const rootSlice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setPointSequence: (state, action: PayloadAction<PointSequence>) => {
      state.pointSequence = action.payload
    },
  },
})

export const rootReducer = rootSlice.reducer

export const { setPointSequence } = rootSlice.actions
