import { MainLayout } from 'Layouts';
import Home from 'page';
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

    </Routes>
  </BrowserRouter>
);

export default AppRouter;
