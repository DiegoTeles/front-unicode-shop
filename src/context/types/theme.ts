import { ReactNode } from 'react';
/* eslint-disable no-unused-vars */
export enum Mode {
  Light = 'light',
  Dark = 'dark',
}

export interface ThemeProviderProps {
  children: ReactNode;
}

export interface ThemeContext {
  changeMode: (mode: Mode) => void;
  mode: Mode;
}

export interface Theme {
  colors: {
    background: string;
    text: string;
  };
}
