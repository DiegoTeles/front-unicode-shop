import { useNavigate } from 'react-router-dom';
import { Products } from '../types/products';
import { getItem, setItem } from '../utils/localStorage';

export const useCart = () => {
  const navigate = useNavigate();

  const addToCart = (product: Products) => {

    const cart = JSON.parse(getItem('cart') || '[]');

    cart.push(product);

    setItem('cart', JSON.stringify(cart));

    navigate('/cart');
  };

  const removeFromCart = (productId: number) => {
    const cart = JSON.parse(getItem('cart') || '[]');

    const itemIndex = cart.findIndex((item: Products) => item.id === productId);

    if (itemIndex !== -1) {

      cart.splice(itemIndex, 1);

      setItem('cart', JSON.stringify(cart));
    }
  };

  return { addToCart, removeFromCart };
};
