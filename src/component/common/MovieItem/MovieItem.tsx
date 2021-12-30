import { FC } from 'react';
import { Movie } from 'types';
import { AiFillStar } from 'react-icons/ai';
import './MovieItem.css';
import { limitText } from 'services/manageString';
import { Link } from 'react-router-dom';

interface Props {
  movie: Movie
}

const MovieItem: FC<Props> = ({ movie }) => (
  <article className="movie-card-block bg-gray3-main">
    <Link to={`/movie/${movie.id}`}>
      {
        movie.poster_path
          ? <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
          : <img src="https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt={movie.title} />
      }
    </Link>
    <section className="px-2">
      <div className="flex justify-between">
        <span>
          <AiFillStar className="inline-block mb-1 mr-1 text-yellow-main" />
          {movie.vote_average}
        </span>
        <span className="text-gray4-mian">{movie.vote_count}</span>
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
