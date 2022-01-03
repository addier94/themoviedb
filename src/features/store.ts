import { configureStore } from '@reduxjs/toolkit';
import nowPlayingSlice from './slice/nowPlayingSlice';
import Ui from './slice/Ui';

export const store = configureStore({
  reducer: {
    movie: nowPlayingSlice,
    ui: Ui,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
