import { BillboardResponse } from 'types';
import { APIKey } from 'utils/movieApiKey';
import movieApi from '../utils/baseApi';

export let latestDoc:any = '';

export const getNowPlayings = async (page:number = 1) => {
  try {
    const { data } = await movieApi.get<BillboardResponse>(`movie/now_playing?api_key=${APIKey}&language=en-US&page=${page}`);

    latestDoc = data.results[data.results.length - 1];

    return data;
  } catch (error:any) {
    return error;
  }
};
