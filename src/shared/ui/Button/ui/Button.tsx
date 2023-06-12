import { ButtonHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames';

import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button = ({
  children,
  className,
  theme = ThemeButton.CLEAR,
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