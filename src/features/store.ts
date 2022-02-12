import { configureStore } from '@reduxjs/toolkit';
import nowPlayingSlice from './slice/nowPlayingSlice';
import Ui from './slice/Ui';
import auth from './slice/authSlice';
import popular from './slice/popularSlice';
import topRated from './slice/topRatedSlice';
import selectMovie from './slice/selectMovieSlice';

export const store = configureStore({
  reducer: {
    nowPlaying: nowPlayingSlice,
    popular,
    topRated,
    selectMovie,
    ui: Ui,
    auth,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
