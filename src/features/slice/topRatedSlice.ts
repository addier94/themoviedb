import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchTopRated } from 'action/topRatedAction';
import {
  BillboardResponse, Movie, Popular, TopRelated as TopRated,
} from 'types';

interface TopRatedParams {
  page: number,
  latestDoc: Movie|string
}

export const FetchTopRated = createAsyncThunk(
  'movies/FetchTopRated',
  async (payload:TopRatedParams) => {
    const { page, latestDoc } = payload;
    const data = await fetchTopRated(page) as BillboardResponse;
    return { FetchTopRated: data, latestDoc, page };
  },
);

const initialState:TopRated = {
  topRated: {} as BillboardResponse,
  loading: false,
  latestDoc: '',
  stop: 0,
};

const topRelatedSlice = createSlice({
  name: 'topRated',
  initialState,
  reducers: {
    paginate: (state, action) => {
      state.latestDoc = action.payload.latestDoc;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchTopRated.pending, (state) => {
        state.loading = true;
      })
      .addCase(FetchTopRated.fulfilled, (state, action) => {
        if (action.payload.latestDoc) {
          state.topRated.results = [...state.topRated.results, ...action.payload.FetchTopRated.results];
        } else {
          state.topRated = action.payload.FetchTopRated;
        }
        state.topRated.page = action.payload.page;
        state.stop = action.payload.FetchTopRated.results.length;
        state.loading = false;
      });
  },
});
export const { paginate } = topRelatedSlice.actions;
export default topRelatedSlice.reducer;
