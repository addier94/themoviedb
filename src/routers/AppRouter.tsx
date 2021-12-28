import { MainLayout } from 'Layouts';
import Home from 'page';
import Upcoming from 'page/upcoming';
import Popular from 'page/popular';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
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
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
