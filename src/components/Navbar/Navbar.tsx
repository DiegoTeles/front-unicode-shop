import * as S from './styles';
import Logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { CartBadge } from '..';
import useGlobalStore from '../../store/useGlobalStore';
import { useEffect, useState } from 'react';
import { getItem } from '../../utils/localStorage';

export default function Navbar() {
  const [count, setCount] = useState<number>(0);
  const { productToCartCount } = useGlobalStore();

  useEffect(() => {
    const cartData = getItem('cart');
    setCount(JSON.parse(cartData).length);
  }, [productToCartCount]);

  return (
    <>
      <S.NavbarWrapper>
        <Link to={'/'}>
          <S.Logo>
            <img
              src={Logo}
              alt='Logo escrito Unicode e uma imagem de um quradro ao lado'
            />
          </S.Logo>
        </Link>
        <S.TextBox>
          <Link to={'/admin'}>
            <p>Admin</p>
          </Link>
          <p>
            Olá, <b>Fulano</b>
          </p>
          <Link to={'/cart'}>
            <CartBadge countProducts={count > 0 ? count : productToCartCount} />
          </Link>
        </S.TextBox>
      </S.NavbarWrapper>
    </>
  );
}
