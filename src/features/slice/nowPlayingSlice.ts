import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchNowPlayingMovies } from 'action/nowPlayingAction';
import {
  BillboardResponse, Movie, NowPlaying,
} from 'types';

interface FetchNowPlayingParams {
  page: number,
  latestDoc: Movie|string
}

export const fetchNowPlaying = createAsyncThunk(
  'movies/fetchNowPlaying',
  async (payload:FetchNowPlayingParams) => {
    const { page, latestDoc } = payload;
    const data = await fetchNowPlayingMovies(page) as BillboardResponse;
    return { popularMovie: data, latestDoc, page };
  },
);

const initialState:NowPlaying = {
  nowPlaying: {} as BillboardResponse,
  loading: false,
  latestDoc: '',
  stop: 0,
};

const popularSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {
    paginate: (state, action) => {
      state.latestDoc = action.payload.latestDoc;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNowPlaying.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNowPlaying.fulfilled, (state, action) => {
        if (action.payload.latestDoc) {
          state.nowPlaying.results = [...state.nowPlaying.results, ...action.payload.popularMovie.results];
        } else {
          state.nowPlaying = action.payload.popularMovie;
        }
        state.nowPlaying.page = action.payload.page;
        state.stop = action.payload.popularMovie.results.length;
        state.loading = false;
      });
  },
});
export const { paginate } = popularSlice.actions;
export default popularSlice.reducer;
