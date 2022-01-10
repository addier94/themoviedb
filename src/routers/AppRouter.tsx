import { MainLayout } from 'Layouts';
import Home from 'page';
import Upcoming from 'page/upcoming';
import Popular from 'page/popular';
import {
  Routes, Route, BrowserRouter, HashRouter,
} from 'react-router-dom';
import TopRated from 'page/TopRated';
import MovieById from 'page/movie/MovieById';

const AppRouter = () => (
  <HashRouter>
    {/* <BrowserRouter> */}
    <Routes>

      <Route
        path="/"
        element={(
          <MainLayout>
            <Home />
          </MainLayout>
        )}
      />
      <Route
        path="/popular"
        element={(
          <MainLayout>
            <Popular />
          </MainLayout>
        )}
      />

      <Route
        path="/upcoming"
        element={(
          <MainLayout>
            <Upcoming />
          </MainLayout>
        )}
      />

      <Route
        path="/top-rated"
        element={(
          <MainLayout>
            <TopRated />
          </MainLayout>
        )}
      />

      <Route
        path="/movie/:movieId"
        element={(
          <MainLayout>
            <MovieById />
          </MainLayout>
        )}
      />

    </Routes>

    {/* </BrowserRouter> */}
  </HashRouter>
);

export default AppRouter;
