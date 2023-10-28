import * as S from './styles';
import { ProductCard } from '..';
import useGlobalStore from '../../store/useGlobalStore';
import { Products } from '../../types/products';

export default function LastReleases() {
  const { allProducts } = useGlobalStore();
  return (
    <>
      <S.LastReleasesWrapper>
        <h1>Últimos lançamentos</h1>
        <S.ProductBox>
          {allProducts.map((frame: Products) => (
            <ProductCard
              key={frame.id}
              id={frame.id}
              title={frame.title}
              description={frame.description}
              price={frame.price}
            />
          ))}
        </S.ProductBox>
      </S.LastReleasesWrapper>
    </>
  );
}
