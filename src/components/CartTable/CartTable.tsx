import { useEffect, useState } from 'react';

import * as S from './styles';
import Frame from '../../assets/img/frame.png';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { getItem } from '../../utils/localStorage';
import { Products } from '../../types/products';
import { useCart } from '../../hooks/useCart';
import useGlobalStore from '../../store/useGlobalStore';

export default function CartTable() {
  const { setProductToCartCountDown, productToCartCount } = useGlobalStore();

  const [products, setProducts] = useState<Products[]>([]);
  const { removeFromCart } = useCart();

  useEffect(() => {
    const cartData = getItem('cart');
    setProducts(JSON.parse(cartData));
  }, [productToCartCount]);

  const handleDeleteItem = (productId: number) => {
    removeFromCart(productId);
    setProductToCartCountDown();
  };
  return (
    <S.TableCard>
      <table>
        <thead>
          <S.TableRow>
            <S.TableHead colSpan={3}>Item</S.TableHead>
            <S.TableHead colSpan={3}>Descrição</S.TableHead>
            <S.TableHead colSpan={2}>Valor</S.TableHead>
            <S.TableHead>Ação</S.TableHead>
          </S.TableRow>
        </thead>
        <tbody>
          {products.length ? (
            products.map((item: Products) => (
              <S.TableRow key={item.id}>
                <S.TableData colSpan={3}>
                  <img src={Frame} alt='Quadro' />
                </S.TableData>
                <S.TableData colSpan={3}>
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                </S.TableData>
                <S.TableData colSpan={2}>
                  <h1>R$ {item.price}</h1>
                </S.TableData>
                <S.TableData>
                  <S.IconButton onClick={() => handleDeleteItem(item.id)}>
                    <RiDeleteBin6Fill />
                  </S.IconButton>
                </S.TableData>
              </S.TableRow>
            ))
          ) : (
            <>Sem itens no carrinho</>
          )}
        </tbody>
      </table>
    </S.TableCard>
  );
}
