import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDescription from './pages/ProductDescription';

export default function Router() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/description' element={<ProductDescription />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
