import * as S from './styles';

export default function Header() {
  return (
    <>
      <S.HeaderWrapper>
        <S.TextBox>
          <h1>Unicode</h1>
          <h1>Quadros decorativos</h1>

          <S.Button>Ver quadros</S.Button>
        </S.TextBox>
        <S.ImageBox>Unicode Quadros decorativos</S.ImageBox>
      </S.HeaderWrapper>
    </>
  );
}
