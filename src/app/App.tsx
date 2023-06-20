import { Suspense } from 'react';

import { ErrorBoundary } from './providers/ErrorBoundary';
import { AppRouter } from 'app/providers/AppRouter';

import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { useTheme } from 'entities/theme';
import { classNames } from 'shared/lib/classNames';

import './styles/index.scss';

export const App = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <ErrorBoundary>
          <Navbar />
          <div className="content-page">
            <Sidebar />
            <AppRouter />
          </div>
        </ErrorBoundary>
      </Suspense>
    </div>
  );
};
