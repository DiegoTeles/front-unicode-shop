import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Router from './Routes';
import { AppThemeProvider } from './context/theme';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppThemeProvider>
        <Router />
      </AppThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
