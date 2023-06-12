import { useState, useMemo } from 'react';

import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from 'entities/theme';

import type { ThemeContextProps } from 'entities/theme';

interface ThemeProviderProps {
  children: JSX.Element | JSX.Element[];
}

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) ?? Theme.LIGHT;

export const ThemeProvider = ({
  children,
}: ThemeProviderProps): JSX.Element => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

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
