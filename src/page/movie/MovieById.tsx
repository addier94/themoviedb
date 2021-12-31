import { BigLoading } from 'component/common';
import SingleMovie from 'component/home/SingleMovie';
import { appSelector } from 'features/hooks';
import { fetchAsyncMovieDetail } from 'features/slice/nowPlayingSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const MovieById = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { loading } = appSelector((state) => state.movie);

  useEffect(() => {
    if (movieId) dispatch(fetchAsyncMovieDetail(movieId));
  }, [dispatch, movieId]);
  return (
    <>
      {loading && <BigLoading />}

      <SingleMovie />
    </>
  );
};

export default MovieById;
