import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import AppThemeProvider from './context/theme/Context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppThemeProvider>
      <main>
        <App />
      </main>
    </AppThemeProvider>
  </React.StrictMode>
);
