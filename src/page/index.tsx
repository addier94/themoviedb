import Movies from 'component/home/Movies';
import { movieFetchData } from 'features/slice/nowPlayingSlice';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieFetchData());
  }, [dispatch]);

  return (
    <div>
      <Movies />
    </div>
  );
};

export default Home;
