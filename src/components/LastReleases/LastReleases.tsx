import * as S from './styles';
import { PorductCard } from '..';

export default function LastReleases() {
  return (
    <>
      <S.HeaderWrapper>
        <h1>Últimos lançamentos</h1>
        <S.ProductBox>
          <PorductCard />
          <PorductCard />
          <PorductCard />
        </S.ProductBox>
      </S.HeaderWrapper>
    </>
  );
}
