import { MovieStateTitle } from 'component/common';
import Movies from 'component/home/Movies';
import { appSelector } from 'features/hooks';
import { movieFetchData } from 'features/slice/nowPlayingSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Popular = () => {
  const movie = appSelector((state) => state.movie);
  const { data: { page, total_pages }, latestDoc, tag } = movie;

  const dispatch = useDispatch();

  useEffect(() => {
    let numPage: number = 1;
    if (tag === 'popular') {
      numPage = (page < total_pages) ? page + 1 : page;
    }

    const payload = { page: numPage, doc: latestDoc, tag: 'popular' };
    dispatch(movieFetchData(payload));
  }, [dispatch, latestDoc]);
  return (
    <>
      <MovieStateTitle title="List of Popular Movies" />
      <Movies />
    </>
  );
};

export default Popular;
