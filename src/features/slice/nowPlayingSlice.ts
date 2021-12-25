import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getNowPlayings } from 'action/nowPlayingAction';
import { BillboardResponse } from 'types';

export const movieFetchData = createAsyncThunk(
  'movies/nowPlayingsFetch',
  async () => {
    const response = await getNowPlayings();

    return response;
  },
);

// export interface MovieState {
//   data: BillboardResponse,
//   loading: boolean,
//   stop: number
// }

// export const initSubState = {

// };

const initialState: BillboardResponse = {
  dates: {
    maximum: '',
    minimum: '',
  },
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,

  loading: false,
  pagination: '',
  stop: 1,
};

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    paginate: (state, action) => {
      state.pagination = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(movieFetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(movieFetchData.fulfilled, (state, action) => {
        if (action.payload.pagination) {
          state.results = [...state.results, ...action.payload.results];
        } else {
          state.page = action.payload.page;
          state.results = action.payload.results;
          state.total_pages = action.payload.total_pages;
          state.total_results = action.payload.total_results;
        }
        state.loading = false;
      });
  },
});

export const { paginate } = movieSlice.actions;
export default movieSlice.reducer;
