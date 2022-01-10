import { BigLoading, MovieItem, MovieStateTitle } from 'component/common';
import { appSelector } from 'features/hooks';
import { fetchNowPlaying, paginate } from 'features/slice/nowPlayingSlice';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { latestDoc as doc } from '../action/nowPlayingAction';

const Home = () => {
  const {
    latestDoc, loading, stop, nowPlaying,
  } = appSelector((state) => state.nowPlaying);
  const { page = 1, total_pages, results } = nowPlaying;

  const dispatch = useDispatch();
  const loadRef = useRef(null);

  const handleLoadMore = useCallback(() => {
    if (stop === 0) return;
    dispatch(paginate({ latestDoc: doc }));
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

  useEffect(() => {
    let numPage: number = 1;
    numPage = (page < total_pages) ? page + 1 : page;
    const payload = { page: numPage, latestDoc };
    dispatch(fetchNowPlaying(payload));
  }, [dispatch, latestDoc]);

  return (
    <>
      {loading && <BigLoading />}
      <MovieStateTitle title="Movies Now Playing" />
      <div className="flex flex-wrap items-start">
        {results && results.map((item) => (
          <MovieItem key={item.id} movie={item} />
        ))}

        {/* Load more button */}
        <button
          type="button"
          className={`px-6 py-2 opacity-0 ${stop === 0 && 'hidden'}`}
          onClick={handleLoadMore}
          ref={loadRef}
        >
          Load more
        </button>
      </div>
    </>
  );
};

export default Home;
