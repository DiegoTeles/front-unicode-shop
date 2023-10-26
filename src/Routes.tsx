import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='*' element={<h1>Home</h1>} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
