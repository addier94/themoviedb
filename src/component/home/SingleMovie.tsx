import { RatingMovie, VideoTrailer } from 'component/common';
import { appSelector } from 'features/hooks';
import { showModal } from 'features/slice/Ui';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { convertToHours, getYear } from 'services/manageDate';
import { ResultVideos } from 'types/SingleMovie';
import { DEFAULT_IMAGE, PATH_IMAGE } from 'utils/imagePath';
import { BsBookmarks, BsPlayFill } from 'react-icons/bs';
import { MdFavorite } from 'react-icons/md';
import { VideoModal } from 'component/common/Modal';

const SingleMovie = () => {
  const dispatch = useDispatch();

  const { detail, credit, videos } = appSelector((state) => state.selectMovie.allEndpointsInit);

  const {
    poster_path, title, release_date, genres, runtime, overview, vote_average, vote_count,
  } = detail;

  const [video, setVideo] = useState<ResultVideos | undefined>(undefined);

  useEffect(() => {
    if (videos.id) {
      setVideo(videos.results[0]);
    }
  }, [videos.id]);

  return (
    <section>
      <div className="flex justify-center">
        <img src={poster_path ? PATH_IMAGE + poster_path : DEFAULT_IMAGE} alt={title} />
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
        <article className="flex justify-between py-2">
          <span className="">
            {release_date}
          </span>
          <span>
            { genres && genres.map((val) => (
              <span className="mx-1" key={val.id}>{val.name}</span>
            ))}
          </span>
          <span>{convertToHours(runtime)}</span>
        </article>
        <article className="flex justify-between">

          <div className="flex">
            <div className="flex text-red-700 gap-4 mr-2">
              <div className="flex bg-white-main rounded-full p-2 cursor-pointer">
                {/* <MdFavoriteBorder className="w-6 h-6" /> */}
                <MdFavorite className="w-6 h-6" />
              </div>
              <div className="flex bg-white-main rounded-full p-2 cursor-pointer">
                {/* <BsBookmarksFill className="w-6 h-6 " /> */}
                <BsBookmarks className="w-6 h-6" />
              </div>
            </div>
            <button type="button" onClick={() => dispatch(showModal())} className="bg-yellow-main rounded-md duration-150 hover:opacity-80">
              <BsPlayFill className="w-10 h-10" />
            </button>
          </div>
          <RatingMovie vote_average={vote_average} vote_count={vote_count} />
        </article>
        <VideoModal>
          <VideoTrailer video={video} />
        </VideoModal>
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
