import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type TeamMember = {
  name: string
}

export type State = {
  members: TeamMember[]
}

const initialState: State = {
  members: [],
}

const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    addTeamMember: (state, action: PayloadAction<TeamMember>) => {
      state.members.push(action.payload)
    },
  },
})

export const teamReducer = teamSlice.reducer

export const { addTeamMember } = teamSlice.actions
