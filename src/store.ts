import { configureStore } from '@reduxjs/toolkit'

import { rootReducer, State } from './slices/rootSlice'
import { cardReducer } from './slices/cardSlice'
import { avatarReducer } from './slices/avatarSlice'

export function createStore(initialState?: { root?: State }) {
  return configureStore({
    reducer: {
      root: rootReducer,
      card: cardReducer,
      avatar: avatarReducer,
    },
    preloadedState: initialState,
  })
}

export type Store = ReturnType<typeof createStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<Store['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = Store['dispatch']
