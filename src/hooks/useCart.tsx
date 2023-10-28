import { useNavigate } from 'react-router-dom';
import { Products } from '../types/products';
import { getItem, setItem } from '../utils/localStorage';

export const useCart = () => {
  const navigate = useNavigate();

  const addToCart = (product: Products) => {
    // Recupere o carrinho atual do Local Storage (se existir)
    const cart = JSON.parse(getItem('cart') || '[]');
    // Adicione o produto ao carrinho
    cart.push(product);

    // Atualize o carrinho no Local Storage
    setItem('cart', JSON.stringify(cart));
    // eslint-disable-next-line react-hooks/rules-of-hooks

    // Redirecione para a página de carrinho ou outra página desejada
    navigate('/cart');
  };

  const removeFromCart = (productId: number) => {
    // Recupere o carrinho atual do Local Storage (se existir)
    const cart = JSON.parse(getItem('cart') || '[]');

    // Encontre o índice do item a ser removido
    const itemIndex = cart.findIndex((item: Products) => item.id === productId);

    if (itemIndex !== -1) {
      // Remova o item do carrinho
      cart.splice(itemIndex, 1);

      // Atualize o carrinho no Local Storage
      setItem('cart', JSON.stringify(cart));
    }
  };

  return { addToCart, removeFromCart };
};
