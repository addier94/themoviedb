import { appSelector } from 'features/hooks';
import { convertToHours, getYear } from 'services/manageDate';
import { DEFAULT_IMAGE, PATH_IMAGE } from 'utils/imagePath';

const SingleMovie = () => {
  const { detail, credit } = appSelector((state) => state.movie.selectMovie);

  const {
    backdrop_path, poster_path, title, release_date, genres, runtime, overview,
  } = detail;

  return (
    <section>
      <div className="flex justify-center">
        {
          backdrop_path
            ? <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
            : <img src="https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt={title} />
        }
      </div>
      <article className="mt-2">
        <h1 className="text-2xl font-bold">
          {title}
          <span className="ml-1 font-light">
            (
            {getYear(release_date)}
            )
          </span>
        </h1>
        <div className="flex justify-between py-2">
          <span className="">
            {release_date}
          </span>
          <span>
            { genres && genres.map((val) => (
              <span className="mx-1" key={val.id}>{val.name}</span>
            ))}
          </span>
          <span>{convertToHours(runtime)}</span>
        </div>
        <div>
          <h6 className="text-2xl">Overview</h6>
          <p className="font-light">{overview}</p>
        </div>
      </article>
      <article>
        <h5 className="text-xl my-2">Top Billed Cast</h5>
        <div className=" flex overflow-x-scroll gap-3 pb-2">
          { credit.id && credit.cast.map((val) => (
            <div key={val.id} className="basis-52 flex-shrink-0 flex-grow-0">
              <img src={val.profile_path ? PATH_IMAGE + val.profile_path : DEFAULT_IMAGE} alt={val.name} />
              <p className="pt-1 font-medium text-lg">{val.original_name}</p>
              <p className="font-light text-sm">{val.character}</p>
            </div>
          ))}
        </div>
      </article>

    </section>
  );
};

export default SingleMovie;
