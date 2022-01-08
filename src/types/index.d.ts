import { allEndpointForMovieDetail } from './SingleMovie';

export interface Popular extends stateMovie {
  popularMovie: BillboardResponse;
}
export interface stateMovie {
  loading: boolean;
  latestDoc: Movie | string;
  stop: number
}

export interface MovieState {
  data: BillboardResponse;
  popularMovies: BillboardResponse;
  loading: boolean;
  latestDoc: Movie | string;
  movies: Movie[];
  stop: number;
  tag: string;
  selectMovie: allEndpointForMovieDetail
}
export interface BillboardResponse {
  dates?: Dates;
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Dates {
  maximum: string;
  minimum: string;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum OriginalLanguage {
  En = 'en',
  Pt = 'pt',
}
