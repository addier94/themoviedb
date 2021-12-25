import { BillboardResponse } from 'types';
import { APIKey } from 'utils/movieApiKey';
import movieApi from '../utils/baseApi';

export const latestDoc = (data:BillboardResponse) => data.results[data.results.length - 1];

export const getNowPlayings = async (page:number = 1) => {
  try {
    const { data } = await movieApi.get(`movie/now_playing?api_key=${APIKey}&language=en-US&page=${page}`);
    latestDoc(data);

    return data;
  } catch (error) {
    console.log('e', error);
  }
};
