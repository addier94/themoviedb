import { BillboardResponse } from 'types';
import { APIKey } from 'utils/movieApiKey';
import movieApi from '../utils/baseApi';

export let latestDoc:any = '';

export const getNowPlayings = async (page:number, tag:string) => {
  try {
    const { data } = await movieApi.get<BillboardResponse>(`movie/${tag}?api_key=${APIKey}&language=en-US&page=${page}`);

    latestDoc = data.results[data.results.length - 1];

    return data;
  } catch (error:any) {
    return error;
  }
};

export const getSingleMovieDetail = async (id:string) => {
  try {
    const res = await Promise.all([
      movieApi.get(`movie/${id}?api_key=${APIKey}&language=en-US`),
      movieApi.get(`movie/${id}/credits?api_key=${APIKey}&language=en-US`),
      movieApi.get(`movie/${id}/external_ids?api_key=${APIKey}`),
      movieApi.get(`movie/${id}/reviews?api_key=${APIKey}&language=en_US&page=1`),
      movieApi.get(`movie/${id}/videos?api_key=${APIKey}&language=en_US`),
      movieApi.get(`movie/${id}/recommendations?api_key=${APIKey}&language=en_US`),
    ]);

    // resources for each endpoint like this {detail:{...}, credit:{...}, external_id:{...} }
    const resources:string[] = ['detail', 'credit', 'external_id', 'reviews', 'videos', 'recommendations'];
    const data:any = {};

    resources.forEach((item, index) => { data[item] = res[index].data; });

    return data;
  } catch (error:any) {
    return error;
  }
};
