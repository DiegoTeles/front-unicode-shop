import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDescription from './pages/ProductDescription';
import { Navbar } from './components';
import Admin from './views/Admin/Admin';

export default function Router() {
  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/description/:id' element={<ProductDescription />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
