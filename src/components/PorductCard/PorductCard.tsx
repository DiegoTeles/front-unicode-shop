import * as S from './styles';
import Frame from '../../assets/img/frame.png';

export default function PorductCard() {
  return (
    <>
      <S.HeaderWrapper>
        <S.FrameBox>
          <img src={Frame} alt='Quadro' />
          <h1>Quadro Monalisa Cats</h1>
          <p>Super decoração com o tema de gatos para seu ambiente</p>

          <S.ButtonContainer>
            <S.Button>Comprar</S.Button>
            <h1>R$ 25</h1>
          </S.ButtonContainer>
        </S.FrameBox>
      </S.HeaderWrapper>
    </>
  );
}
