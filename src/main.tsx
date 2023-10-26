import React from 'react';
import ReactDOM from 'react-dom/client';
import AppThemeProvider from './context/theme/Context.tsx';
import Router from './Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <Router />
    </AppThemeProvider>
  </React.StrictMode>
);
