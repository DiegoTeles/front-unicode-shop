import * as S from './styles';
import Frame from '../../assets/img/frame.png';
import { useNavigate } from 'react-router-dom';
import { Products } from '../../types/products';

export default function ProductCard({
  id,
  title,
  description,
  price,
}: Products) {
  const navigate = useNavigate();
  return (
    <S.ProductCardWrapper>
      <S.FrameBox>
        <img src={Frame} alt='Quadro' />

        <h1>{title}</h1>
        <p>{description}</p>

        <S.ButtonContainer>
          <S.Button onClick={() => navigate(`/description/${id}`)}>
            Comprar
          </S.Button>

          <h1>R$ {price}</h1>
        </S.ButtonContainer>
      </S.FrameBox>
    </S.ProductCardWrapper>
  );
}
