import * as S from './styles';
import Frame from '../../assets/img/frame.png';
import { useNavigate } from 'react-router-dom';

export default function ProductCard() {
  const navigate = useNavigate();
  return (
    <S.ProductCardWrapper>
      <S.FrameBox>
        <img src={Frame} alt='Quadro' />

        <h1>Quadro Monalisa Cats</h1>
        <p>Super decoração com o tema de gatos para seu ambiente</p>

        <S.ButtonContainer>
          <S.Button onClick={() => navigate('/description')}>Comprar</S.Button>

          <h1>R$ 25</h1>
        </S.ButtonContainer>
      </S.FrameBox>
    </S.ProductCardWrapper>
  );
}
