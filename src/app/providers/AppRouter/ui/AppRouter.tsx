import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routesConfig } from 'shared/config/routesConfig';
import { PageLoader } from 'widgets/PageLoader';

export const AppRouter = (): JSX.Element => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routesConfig).map(
          ({ path, element }): JSX.Element => (
            <Route
              key={path}
              path={path}
              element={<div className="page-wrapper">{element}</div>}
            />
          ),
        )}
      </Routes>
    </Suspense>
  );
};
