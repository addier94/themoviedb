import Movies from 'component/home/Movies';
import { appSelector } from 'features/hooks';
import { movieFetchData } from 'features/slice/nowPlayingSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {
  const movie = appSelector((state) => state.movie);

  const dispatch = useDispatch();
  useEffect(() => {
    const page = movie.page + 1;
    const payload = { page, doc: movie.latestDoc };
    dispatch(movieFetchData(payload));
  }, [dispatch, movie.latestDoc]);

  return (
    <div>
      <Movies />
    </div>
  );
};

export default Home;
