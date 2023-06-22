import { classNames } from '../classNames';
import { Theme } from 'entities/theme';
import { ThemeProvider } from 'app/providers/ThemeProvider';

export const getThemeDecorator = (theme: Theme = Theme.LIGHT) => {
  return function ThemeDecorator(Story: () => JSX.Element): JSX.Element {
    return (
      <ThemeProvider startTheme={theme}>
        <div className={classNames('app', {}, [theme])}>{Story()}</div>
      </ThemeProvider>
    );
  };
};
