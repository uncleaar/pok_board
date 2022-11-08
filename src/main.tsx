import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StoreProvider } from '@utils/contexts';

import App from './App';

import './assets/styles/globals.scss';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <QueryClientProvider client={queryClient}>
    <StoreProvider>
      <App />
    </StoreProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);
