import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDescription from './pages/ProductDescription';

export default function Router() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/description' element={<ProductDescription />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
