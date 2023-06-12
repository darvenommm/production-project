import { classNames } from 'shared/lib/classNames';
import { RoutePaths, AppRoutes } from 'shared/config/routesConfig';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';

import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink
          className={cls.mainLink}
          theme={AppLinkTheme.INVERTED}
          to={RoutePaths[AppRoutes.MAIN]}
        >
          Home
        </AppLink>
        <AppLink theme={AppLinkTheme.INVERTED} to={RoutePaths[AppRoutes.ABOUT]}>
          About
        </AppLink>
      </div>
    </div>
  );
};
