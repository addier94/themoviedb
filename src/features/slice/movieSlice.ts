import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BillboardResponse } from 'types';
import { APIKey } from 'utils/movieApiKey';
import movieApi from '../../utils/baseApi';

export const movieFetchData = createAsyncThunk(
  'movies/movieFetchData',
  async (page:number = 1) => {
    const response = await movieApi.get(`movie/now_playing?api_key=${APIKey}&language=en-US&page=${page}`);
    return response.data;
  },
);

export interface MovieState {
  billboard: BillboardResponse
  loading: boolean
}

export const initBillboard = {
  dates: {
    maximum: '',
    minimum: '',
  },
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const initialState: MovieState = {
  billboard: initBillboard,
  loading: false,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(movieFetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(movieFetchData.fulfilled, (state, action) => {
        state.billboard = action.payload;
        state.loading = false;
      });
  },
});

export default movieSlice.reducer;
