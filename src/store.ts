import { configureStore } from '@reduxjs/toolkit'

import { rootReducer, State as RootSliceState } from './slices/rootSlice'
import { teamReducer, State as TeamState } from './slices/teamSlice'
import { cardReducer } from './slices/cardSlice'
import { avatarReducer } from './slices/avatarSlice'

export function createStore(initialState?: {
  root?: RootSliceState
  team?: TeamState
}) {
  return configureStore({
    reducer: {
      root: rootReducer,
      card: cardReducer,
      avatar: avatarReducer,
      team: teamReducer,
    },
    preloadedState: initialState,
  })
}

export type Store = ReturnType<typeof createStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<Store['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = Store['dispatch']
