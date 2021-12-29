import { MovieStateTitle } from 'component/common';
import Movies from 'component/home/Movies';
import { appSelector } from 'features/hooks';
import { movieFetchData, resetMovie } from 'features/slice/nowPlayingSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {
  const movie = appSelector((state) => state.movie);
  const { data: { page, total_pages }, latestDoc, tag } = movie;

  const dispatch = useDispatch();

  useEffect(() => {
    let numPage: number = 1;
    if (tag === 'no_playing') {
      numPage = (page < total_pages) ? page + 1 : page;
    }
    const payload = { page: numPage, doc: latestDoc, tag: 'now_playing' };
    dispatch(movieFetchData(payload));
  }, [latestDoc]);

  return (
    <>
      <MovieStateTitle title="Now playing" />
      <Movies />
    </>
  );
};

export default Home;
