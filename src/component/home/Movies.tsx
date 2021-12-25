import { latestDoc } from 'action/nowPlayingAction';
import { MovieItem, MovieStateTitle } from 'component/common';
import { appSelector } from 'features/hooks';
import { paginate } from 'features/slice/nowPlayingSlice';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

const Movies = () => {
  const dispatch = useDispatch();
  const loadRef = useRef(null);
  const { results: movies, loading, stop } = appSelector((state) => state.movie);

  const handleLoadMore = useCallback(() => {
    if (stop === 0) return;
    dispatch(paginate({ latestDoc }));
  }, [stop, dispatch]);

  useEffect(() => {
    const btn = loadRef.current;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        handleLoadMore();
      }
    });

    if (btn) observer.observe(btn);

    return () => {
      if (btn) observer.unobserve(btn);
    };
  }, [handleLoadMore]);

  return (
    <div>
      <MovieStateTitle title="Now playing" />
      <div className="flex flex-wrap items-start">
        {movies && movies.map((item) => (
          <MovieItem key={item.id} movie={item} />
        ))}
      </div>
      {/* Load more */}
      {/* <LoadMoreBtn /> */}
      <button
        type="button"
        className={`px-6 py-2 border-2 opacity-75 ${stop === 0 && 'hidden'}`}
        onClick={handleLoadMore}
        ref={loadRef}
      >
        Load more
      </button>
    </div>
  );
};

export default Movies;
