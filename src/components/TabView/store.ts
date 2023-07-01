import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export type State = {
  activeTabIndex: number
}

const initialState: State = {
  activeTabIndex: 0,
}

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    setActiveTabIndex: (state, action: PayloadAction<number>) => {
      state.activeTabIndex = action.payload
    },
  },
})

const tabReducer = tabSlice.reducer

export const { setActiveTabIndex } = tabSlice.actions

export function createStore(initialState?: { tab?: State }) {
  return configureStore({
    reducer: {
      tab: tabReducer,
    },
    preloadedState: initialState,
  })
}

export type Store = ReturnType<typeof createStore>
// Infer the `tabState` and `AppDispatch` types from the store itself
export type TabState = ReturnType<Store['getState']>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type TabDispatch = Store['dispatch']

export const useTabDispatch: () => TabDispatch = useDispatch
export const useTabSelector: TypedUseSelectorHook<TabState> = useSelector
