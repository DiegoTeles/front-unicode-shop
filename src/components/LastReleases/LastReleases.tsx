import * as S from './styles';
import { ProductCard } from '..';

export default function LastReleases() {
  return (
    <>
      <S.LastReleasesWrapper>
        <h1>Últimos lançamentos</h1>
        <S.ProductBox>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </S.ProductBox>
      </S.LastReleasesWrapper>
    </>
  );
}
