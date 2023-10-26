import * as S from './styles';
import Frame from '../../assets/img/frame.png';

export default function ProductDetails() {
  return (
    <>
      <S.ProductDetailsWrapper>
        <S.FrameBox>
          <img src={Frame} alt='Quadro' />
        </S.FrameBox>
        <S.DescriptionBox>
          <h1>Quadro Monalisa Cat</h1>

          <p>Super decoração com o tema de gatos para seu ambiente</p>
          <h2>R$ 25,00</h2>
          <S.Button>Comprar</S.Button>
        </S.DescriptionBox>
      </S.ProductDetailsWrapper>
    </>
  );
}
