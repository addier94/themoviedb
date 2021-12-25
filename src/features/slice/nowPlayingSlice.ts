import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getNowPlayings } from 'action/nowPlayingAction';
import { BillboardResponse, Movie } from 'types';

export const movieFetchData = createAsyncThunk(
  'movies/nowPlayingsFetch',
  async (payload: {page:number, doc:Movie|string}) => {
    const { page, doc } = payload;
    const resp = await getNowPlayings(page) as BillboardResponse;

    return { resp, doc };
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
  },
  extraReducers: (builder) => {
    builder
      .addCase(movieFetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(movieFetchData.fulfilled, (state, action) => {
        if (action.payload.doc) {
          state.results = [...state.results, ...action.payload.resp.results];
          state.page = action.payload.resp.page;
        } else {
          state.page = action.payload.resp.page;
          state.results = action.payload.resp.results;
          state.total_pages = action.payload.resp.total_pages;
          state.total_results = action.payload.resp.total_results;
        }
        state.stop = action.payload.resp.results.length;
        state.loading = false;
      });
  },
});

export const { paginate } = movieSlice.actions;
export default movieSlice.reducer;
