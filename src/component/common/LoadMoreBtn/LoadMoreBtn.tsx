import { appSelector } from 'features/hooks';
import { movieFetchData } from 'features/slice/movieSlice';
import { GoPlus } from 'react-icons/go';
import { useDispatch } from 'react-redux';

const LoadMoreBtn = () => {
  const { billboard } = appSelector((state) => state.movie);
  const dispatch = useDispatch();

  const handleLoadMore = async () => {
    dispatch(movieFetchData(billboard.page + 1));
  };
  return (
    <div className="text-center my-10">
      <GoPlus onClick={handleLoadMore} className="inline-block text-yellow-main text-4xl cursor-pointer" />
    </div>
  );
};

export default LoadMoreBtn;
