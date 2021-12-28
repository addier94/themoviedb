import Movies from 'component/home/Movies';
import { appSelector } from 'features/hooks';
import { movieFetchData, resetMovie } from 'features/slice/nowPlayingSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Upcoming = () => {
  const movie = appSelector((state) => state.movie);
  const { data: { page, total_pages }, latestDoc } = movie;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetMovie());
  }, []);

  useEffect(() => {
    const numPage = (page < total_pages) ? page + 1 : page;
    const payload = { page: numPage, doc: latestDoc, tag: 'upcoming' };
    dispatch(movieFetchData(payload));
  }, [dispatch, latestDoc]);
  return (
    <div>
      <Movies />
    </div>
  );
};

export default Upcoming;
