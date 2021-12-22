import { LoadMoreBtn, MovieItem, MovieStateTitle } from 'component/common';
import { appSelector } from 'features/hooks';

const Movies = () => {
  const { billboard } = appSelector((state) => state.movie);
  const { results: movies } = billboard;

  return (
    <>
      <MovieStateTitle title="Now playing" />
      <div className="flex flex-wrap items-start">
        {movies && movies.map((item) => (
          <MovieItem key={item.id} movie={item} />
        ))}
      </div>
      <LoadMoreBtn />
    </>
  );
};

export default Movies;
