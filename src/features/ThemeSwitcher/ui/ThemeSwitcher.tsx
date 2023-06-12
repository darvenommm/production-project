import { classNames } from 'shared/lib/classNames';
import { Theme, useTheme } from 'entities/theme';
import { Button } from 'shared/ui/Button';
import Sun from 'shared/assets/icons/sun.svg';
import Moon from 'shared/assets/icons/moon.svg';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({
  className,
}: ThemeSwitcherProps): JSX.Element => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className={classNames(cls.button, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.LIGHT ? <Moon fill="white" /> : <Sun />}
    </Button>
  );
};
