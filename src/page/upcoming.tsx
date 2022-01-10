// import { MovieStateTitle } from 'component/common';
// import Movies from 'component/home/Movies';
// import { appSelector } from 'features/hooks';
// import { movieFetchData } from 'features/slice/nowPlayingSlice';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// const Upcoming = () => {
//   const movie = appSelector((state) => state.movie);
//   const { data: { page, total_pages }, latestDoc, tag } = movie;

//   const dispatch = useDispatch();

//   useEffect(() => {
//     let numPage: number = 1;
//     if (tag === 'upcoming') {
//       numPage = (page < total_pages) ? page + 1 : page;
//     }
//     const payload = { page: numPage, doc: latestDoc, tag: 'upcoming' };
//     dispatch(movieFetchData(payload));
//   }, [dispatch, latestDoc]);
//   return (
//     <>
//       <MovieStateTitle title="List of upcoming" />
//       <Movies />
//     </>
//   );
// };

// export default Upcoming;
import React from 'react';

const upcoming = () => (
  <div>
    this is upcoming
  </div>
);

export default upcoming;
