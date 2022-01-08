import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getPopularMovies } from 'action/popularAction';
import {
  BillboardResponse, Movie, Popular,
} from 'types';

interface PopularMovieParams {
  page: number,
  latestDoc: Movie|string
}

export const getPopularMovie = createAsyncThunk(
  'movies/getPopularMovies',
  async (payload:PopularMovieParams) => {
    const { page, latestDoc } = payload;
    const data = await getPopularMovies(page) as BillboardResponse;
    return { popularMovie: data, latestDoc, page };
  },
);

const initialState:Popular = {
  popularMovie: {} as BillboardResponse,
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
      .addCase(getPopularMovie.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPopularMovie.fulfilled, (state, action) => {
        if (action.payload.latestDoc) {
          state.popularMovie.results = [...state.popularMovie.results, ...action.payload.popularMovie.results];
        } else {
          state.popularMovie = action.payload.popularMovie;
        }
        state.popularMovie.page = action.payload.page;
        state.stop = action.payload.popularMovie.results.length;
        state.loading = false;
      });
  },
});
export const { paginate } = popularSlice.actions;
export default popularSlice.reducer;
