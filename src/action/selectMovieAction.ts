import { APIKey } from 'utils/movieApiKey';
import movieApi from '../utils/baseApi';

export const fetchMovieDetail = async (id:string) => {
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
