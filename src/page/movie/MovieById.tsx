import { BigLoading } from 'component/common';
import SingleMovie from 'component/home/SingleMovie';
import { appSelector } from 'features/hooks';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchAsyncMovieDetail } from '../../features/slice/selectMovieSlice';

const MovieById = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { loading } = appSelector((state) => state.selectMovie);

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
