import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getNowPlayings } from 'action/nowPlayingAction';
import {
  BillboardResponse, Movie, MovieState,
} from 'types';

export const movieFetchData = createAsyncThunk(
  'movies/nowPlayingsFetch',
  async (payload: {page:number, doc:Movie|string, tag:string}) => {
    const { page, doc, tag } = payload;
    const resp = await getNowPlayings(page, tag) as BillboardResponse;

    return { resp, doc };
  },
);
const initRestData = {
  dates: {
    maximum: '',
    minimum: '',
  },
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const initialState: MovieState = {
  data: initRestData,
  loading: false,
  movies: [],
  latestDoc: '',
  stop: 0,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    paginate: (state, action) => {
      state.latestDoc = action.payload.latestDoc;
    },
    resetMovie: (state) => {
      state.data = initRestData;
      state.movies = [];
      state.latestDoc = '';
      state.stop = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(movieFetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(movieFetchData.fulfilled, (state, action) => {
        if (action.payload.doc) {
          state.data = action.payload.resp;
          state.movies = [...state.movies, ...action.payload.resp.results];
        } else {
          state.data = action.payload.resp;
          state.movies = action.payload.resp.results;
        }
        state.stop = action.payload.resp.results.length;
        state.loading = false;
      });
  },
});

export const { paginate, resetMovie } = movieSlice.actions;
export default movieSlice.reducer;
