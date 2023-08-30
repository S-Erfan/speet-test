import { configureStore } from '@reduxjs/toolkit'
import speedSlice from './speedSlice';

const store = configureStore({
    reducer: { speed: speedSlice },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
