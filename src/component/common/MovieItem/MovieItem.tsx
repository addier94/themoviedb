import { FC } from 'react';
import { Movie } from 'types';
import './MovieItem.css';
import { limitText } from 'services/manageString';
import { Link } from 'react-router-dom';
import { DEFAULT_IMAGE, PATH_IMAGE } from 'utils/imagePath';
import { RatingMovie } from '..';

interface Props {
  movie: Movie
}

const MovieItem: FC<Props> = ({ movie }) => (
  <article className="movie-card-block bg-gray3-main">
    <Link to={`/movie/${movie.id}`}>
      <img src={movie.poster_path ? PATH_IMAGE + movie.poster_path : DEFAULT_IMAGE} alt={movie.title} />
    </Link>
    <section className="px-2">
      <div className="flex justify-between">
        <RatingMovie vote_average={movie.vote_average} vote_count={movie.vote_count} size={{ w: 'w-4', h: 'w-4' }} />
      </div>
      <h2 className="text-sm font-light h-[2.7rem]">{limitText(movie.title, 40)}</h2>
      <div className="flex justify-between text-sm mb-1 text-gray4-mian">
        <span>{movie.release_date}</span>
        <span>{movie.original_language}</span>
      </div>
    </section>
  </article>
);

export default MovieItem;
