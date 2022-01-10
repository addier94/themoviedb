export interface MovieDetail {
  detail: SingleMovie;
  credit: Credits;
  external_ids: ExternalIDS,
  reviews: Reviews,
  videos: Videos,
  recommendations: Recommendations
}
// type for endpoint GET /movie/{movie_id}
export interface SingleMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

// type for endpoint GET /movie/{movie_id}/credits
export interface Credits {
  id: number;
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: Department;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: Department;
  job?: string;
}

export enum Department {
  Acting = 'Acting',
  Art = 'Art',
  Camera = 'Camera',
  CostumeMakeUp = 'Costume & Make-Up',
  Crew = 'Crew',
  Directing = 'Directing',
  Production = 'Production',
  Sound = 'Sound',
  VisualEffects = 'Visual Effects',
  Writing = 'Writing',
}

// Type for endpoint GET /movie/{movie_id}/external_ids
export interface ExternalIDS {
  id: number;
  imdb_id: string;
  facebook_id: string;
  instagram_id: string;
  twitter_id: string;
}

// Type for endpoint GET /movie/{movie_id}/reviews
export interface Reviews {
  id: number;
  page: number;
  results: ResultReviews[];
  total_pages: number;
  total_results: number;
}

export interface ResultReviews {
  author: string;
  author_details: AuthorDetails;
  content: string;
  created_at: Date;
  id: string;
  updated_at: Date;
  url: string;
}

export interface AuthorDetails {
  name: string;
  username: string;
  avatar_path: string;
  rating: number | null;
}

// Type for endpoint GET /movie/{movie_id}/videos
export interface Videos {
    id: number;
    results: ResultVideos[];
}

export interface ResultVideos {
    iso_639_1: ISO639_1;
    iso_3166_1: ISO3166_1;
    name: string;
    key: string;
    site: Site;
    size: number;
    type: Type;
    official: boolean;
    published_at: Date;
    id: string;
}

export enum ISO3166_1 {
    Us = 'US',
}

export enum ISO639_1 {
    En = 'en',
}

export enum Site {
    YouTube = 'YouTube',
}

export enum Type {
    Clip = 'Clip',
    Featurette = 'Featurette',
    Teaser = 'Teaser',
    Trailer = 'Trailer',
}
// Type for endpoint GET /movie/{movie_id}/recommendations
export interface Recommendations {
  page: number;
  results: ResultRecomendations[];
  total_pages: number;
  total_results: number;
}

export interface ResultRecomendations {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: MediaType;
  title: string;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export enum MediaType {
  Movie = 'movie',
}

export enum OriginalLanguage {
  En = 'en',
  Fr = 'fr',
  It = 'it',
}
