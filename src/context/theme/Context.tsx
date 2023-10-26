import type { ThemeContext, Theme, ThemeProviderProps } from '../types/theme';
import { createContext, useContext, useEffect, useState } from 'react';
import { LightTheme, DarkTheme } from '../theme/Themes';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../theme/GlobalStyles';
import { Mode } from '../types/theme';

const initialValue = {
  changeMode: () => {},
  mode: Mode.Light,
};

const AppThemeContext = createContext<ThemeContext>(initialValue);

export const AppThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(LightTheme);
  const [mode, setMode] = useState<Mode>(Mode.Light);

  useEffect(() => {
    const themeStorage: any = localStorage.getItem('theme');
    changeMode(themeStorage ? themeStorage : 'light');
  }, []);

  const changeMode = (mode: Mode) => {
    //setTheme(mode === Mode.Light ? LightTheme : DarkTheme);
    localStorage.setItem('theme', mode);
    setMode(mode);
  };

  return (
    <AppThemeContext.Provider value={{ mode, changeMode }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </AppThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(AppThemeContext);

export default AppThemeProvider;
