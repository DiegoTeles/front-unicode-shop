import * as S from './styles';
import Frame from '../../assets/img/frame.png';
import useGlobalStore from '../../store/useGlobalStore';
import { useCart } from '../../hooks/useCart';

export default function ProductDetails() {
  const { product, setProductToCartCountUp } = useGlobalStore();
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    setProductToCartCountUp();
  };

  return (
    <>
      {product && (
        <S.ProductDetailsWrapper>
          <S.FrameBox>
            <img src={Frame} alt='Quadro' />
          </S.FrameBox>
          <S.DescriptionBox>
            <h1>{product.title}</h1>

            <p>{product.description}</p>
            <h2>R$ {product.price}</h2>
            <S.Button onClick={() => handleAddToCart()}>Comprar</S.Button>
          </S.DescriptionBox>
        </S.ProductDetailsWrapper>
      )}
    </>
  );
}
