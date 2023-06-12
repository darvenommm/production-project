import { Link, type LinkProps } from 'react-router-dom';

import { classNames } from 'shared/lib/classNames';

import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
}

interface AppLinkProps extends LinkProps {
  theme?: AppLinkTheme;
  className?: string;
}

export const AppLink = ({
  to,
  theme = AppLinkTheme.PRIMARY,
  children,
  className = '',
  ...otherProps
}: AppLinkProps): JSX.Element => {
  return (
    <Link
      className={classNames('', {}, [className, cls[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
