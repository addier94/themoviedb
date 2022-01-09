import { BillboardResponse, Movie } from 'types';
import { APIKey } from 'utils/movieApiKey';
import movieApi from '../utils/baseApi';

export let latestDoc:any = '';

export const fetchTopRated = async (page:number) => {
  try {
    const { data } = await movieApi.get<BillboardResponse>(`movie/top_rated?api_key=${APIKey}&language=en-US&page=${page}`);
    latestDoc = data.results[data.results.length - 1];

    return data;
  } catch (error) {
    return error;
  }
};
