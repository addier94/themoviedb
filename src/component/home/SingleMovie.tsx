import { appSelector } from 'features/hooks';
import { convertToHours, getYear } from 'services/manageDate';

const SingleMovie = () => {
  const { selectMovie } = appSelector((state) => state.movie);

  const {
    backdrop_path, poster_path, title, release_date, genres, runtime, overview,
  } = selectMovie;

  return (
    <>
      <h2>nice job</h2>
      <section>
        {
    backdrop_path
      ? <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
      : <img src="https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt={title} />
  }
        <article>
          <h1 className="text-2xl font-bold">
            {title}
            <span className="ml-1 font-light">
              (
              {getYear(release_date)}
              )
            </span>
          </h1>
          <div>
            <span className="">
              {release_date}
            </span>
            <span>
              { genres && genres.map((val) => (
                <span key={val.id}>{val.name}</span>
              ))}
            </span>
            <span>{convertToHours(runtime)}</span>
          </div>
          <div>
            Overview
            <p>{overview}</p>
          </div>

        </article>

      </section>
    </>
  );
};

export default SingleMovie;
