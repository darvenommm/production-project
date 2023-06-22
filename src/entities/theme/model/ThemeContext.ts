import { createContext } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  // The real setTheme will be setting from Provider.value
  setTheme: () => {},
});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
