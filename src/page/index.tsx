import Movies from 'component/home/Movies';
import { appSelector } from 'features/hooks';
import { movieFetchData } from 'features/slice/nowPlayingSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {
  const movie = appSelector((state) => state.movie);
  const { data: { page, total_pages }, latestDoc } = movie;

  const dispatch = useDispatch();
  useEffect(() => {
    const numPage = (page < total_pages) ? page + 1 : page;
    const payload = { page: numPage, doc: latestDoc };
    dispatch(movieFetchData(payload));
  }, [dispatch, latestDoc]);

  return (
    <div>
      <Movies />
    </div>
  );
};

export default Home;
