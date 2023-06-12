import { Suspense } from 'react';

import { Navbar } from 'widgets/Navbar';
import { AppRouter } from 'app/providers/AppRouter';
import { useTheme } from 'entities/theme';
import { classNames } from 'shared/lib/classNames';
import { Sidebar } from 'widgets/Sidebar';

import './styles/index.scss';

export const App = (): JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
