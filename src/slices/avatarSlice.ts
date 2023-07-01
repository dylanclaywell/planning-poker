import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type EyeType = 'round' | 'happy' | 'flat'
export type MouthType = 'flat' | 'happy' | 'frown'

export type State = {
  eye: {
    type: EyeType
    height: number
    spacing: number
    size: number
  }
  mouth: {
    type: MouthType
    height: number
    width: number
    size: number
    xPosition: number
    yPosition: number
  }
}

const initialState: State = {
  eye: {
    spacing: 10,
    size: 15,
    height: 20,
    type: 'round',
  },
  mouth: {
    height: 15,
    width: 15,
    xPosition: 0,
    yPosition: 0,
    size: 50,
    type: 'happy',
  },
}

const avatarSlice = createSlice({
  name: 'avatar',
  initialState,
  reducers: {
    setEyeSpacing: (state, action: PayloadAction<number>) => {
      state.eye.spacing = action.payload
    },
    setEyeType: (state, action: PayloadAction<EyeType>) => {
      state.eye.type = action.payload
    },
    setEyeHeight: (state, action: PayloadAction<number>) => {
      state.eye.height = action.payload
    },
    setEyeSize: (state, action: PayloadAction<number>) => {
      state.eye.size = action.payload
    },
    setMouthHeight: (state, action: PayloadAction<number>) => {
      state.mouth.height = action.payload
    },
    setMouthWidth: (state, action: PayloadAction<number>) => {
      state.mouth.width = action.payload
    },
    setMouthSize: (state, action: PayloadAction<number>) => {
      state.mouth.size = action.payload
    },
    setMouthXPosition: (state, action: PayloadAction<number>) => {
      state.mouth.xPosition = action.payload
    },
    setMouthYPosition: (state, action: PayloadAction<number>) => {
      state.mouth.yPosition = action.payload
    },
    setMouthType: (state, action: PayloadAction<MouthType>) => {
      state.mouth.type = action.payload
    },
  },
})

export const avatarReducer = avatarSlice.reducer

export const {
  setEyeSpacing,
  setEyeType,
  setEyeHeight,
  setEyeSize,
  setMouthHeight,
  setMouthSize,
  setMouthXPosition,
  setMouthYPosition,
  setMouthType,
  setMouthWidth,
} = avatarSlice.actions
