import { useState, useEffect } from 'react';
import * as S from './styles';
import { CartTable, FinishCard } from '../../components';
import { Products } from '../../types/products';
import useGlobalStore from '../../store/useGlobalStore';
import { getItem } from '../../utils/localStorage';

export default function CartView() {
  const { productToCartCount } = useGlobalStore();

  const [products, setProducts] = useState<Products[]>([]);

  useEffect(() => {
    const cartData = getItem('cart');
    setProducts(JSON.parse(cartData));
  }, [productToCartCount]);

  return (
    <>
      <h1>No seu carrinho </h1>
      <S.CartWrapper>
        <CartTable />
        <FinishCard
          products={products}
        />
      </S.CartWrapper>
    </>
  );
}
