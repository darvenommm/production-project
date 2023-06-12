import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routesConfig } from 'shared/config/routesConfig';

export const AppRouter = (): JSX.Element => {
  return (
    <Suspense fallback={<p className="page-wrapper">Loading...</p>}>
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
