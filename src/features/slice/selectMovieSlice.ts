import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMovieDetail } from 'action/selectMovieAction';
import {
  Credits, ExternalIDS, MovieDetail, Reviews, SingleMovie, Videos,
} from 'types/SingleMovie';

export const fetchAsyncMovieDetail = createAsyncThunk(
  'movies/fetchAsyncMovieDetail',
  async (id: string) => {
    const res = await fetchMovieDetail(id) as MovieDetail;
    return res;
  },
);

const allEndpointsInit = {
  detail: {} as SingleMovie,
  credit: {} as Credits,
  external_ids: {} as ExternalIDS,
  reviews: {} as Reviews,
  videos: {} as Videos,
  recommendations: {},
};

const initialState = {
  loading: false,
  allEndpointsInit,
};

const selectMovie = createSlice({
  name: 'selectMovie',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovieDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAsyncMovieDetail.fulfilled, (state, action) => {
        state.allEndpointsInit = action.payload;
        state.loading = false;
      });
  },
});
export default selectMovie.reducer;
