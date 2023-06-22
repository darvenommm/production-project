import { type ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
  DEFAULT = 'default',
  BEAUTIFUL = 'beautiful',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  theme?: ThemeButton;
}

export const Button = ({
  children,
  className = '',
  theme = ThemeButton.DEFAULT,
  ...otherProps
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
