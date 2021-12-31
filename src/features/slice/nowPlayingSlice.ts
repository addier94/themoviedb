import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getNowPlayings, getSingleMovieDetail } from 'action/nowPlayingAction';
import {
  BillboardResponse, Movie, MovieState,
} from 'types';
import { allEndpointForMovieDetail, ExternalIDS } from 'types/SingleMovie';

export const movieFetchData = createAsyncThunk(
  'movies/nowPlayingsFetch',
  async (payload: {page:number, doc:Movie|string, tag:string}) => {
    const { page, doc, tag } = payload;
    const resp = await getNowPlayings(page, tag) as BillboardResponse;

    return { resp, doc, tag };
  },
);

export const fetchAsyncMovieDetail = createAsyncThunk(
  'movies/fetchAsyncMovieDetail',
  async (id: string) => {
    const res = await getSingleMovieDetail(id) as allEndpointForMovieDetail;
    return res;
  },
);
const initialDetailMovie = {
  detail: {},
  credit: {},
  external_ids: {},
  reviews: {},
  videos: {},
  recommendations: {},
};

const initialState: MovieState = {
  data: {} as BillboardResponse,
  loading: false,
  movies: [],
  latestDoc: '',
  stop: 0,
  tag: 'now_playing',
  selectMovie: initialDetailMovie as allEndpointForMovieDetail,
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
        if (state.tag === action.payload.tag) {
          state.data = action.payload.resp;
          state.movies = [...state.movies, ...action.payload.resp.results];
        } else {
          state.data = action.payload.resp;
          state.movies = action.payload.resp.results;
          state.tag = action.payload.tag;
          state.stop = 0;
        }
        state.stop = action.payload.resp.results.length;
        state.loading = false;
      })
      .addCase(fetchAsyncMovieDetail.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAsyncMovieDetail.fulfilled, (state, action) => {
        state.selectMovie = action.payload;
        state.loading = false;
      });
  },
});

export const { paginate } = movieSlice.actions;
export default movieSlice.reducer;
