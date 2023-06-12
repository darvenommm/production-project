import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames';
import { RoutePaths, AppRoutes } from 'shared/config/routesConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className = '' }: NavbarProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          className={cls.mainLink}
          theme={AppLinkTheme.INVERTED}
          to={RoutePaths[AppRoutes.MAIN]}
        >
          {t('main-page-title')}
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to={RoutePaths[AppRoutes.ABOUT]}>
          {t('about-page-title')}
        </AppLink>
      </div>
    </div>
  );
};
