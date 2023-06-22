import { useState, useMemo } from 'react';

import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from 'entities/theme';

import type { ThemeContextProps } from 'entities/theme';

interface ThemeProviderProps {
  startTheme?: Theme;
  children: JSX.Element | JSX.Element[];
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;

export const ThemeProvider = ({
  startTheme = defaultTheme,
  children,
}: ThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(startTheme);

  const defaultProps = useMemo<ThemeContextProps>(
    (): ThemeContextProps => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
