import { MovieStateTitle } from 'component/common';
import Movies from 'component/home/Movies';
import { appSelector } from 'features/hooks';
import { movieFetchData, resetMovie } from 'features/slice/nowPlayingSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const TopRated = () => {
  const movie = appSelector((state) => state.movie);
  const { data: { page, total_pages }, latestDoc, tag } = movie;

  const dispatch = useDispatch();

  useEffect(() => {
    let numPage: number = 1;
    if (tag === 'top_rated') {
      numPage = (page < total_pages) ? page + 1 : page;
    }

    const payload = { page: numPage, doc: latestDoc, tag: 'top_rated' };
    dispatch(movieFetchData(payload));
  }, [dispatch, latestDoc]);
  return (
    <>
      <MovieStateTitle title="List of TopRated" />
      <Movies />
    </>
  );
};

export default TopRated;