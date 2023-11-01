import * as S from './styles';
import { ProductCard } from '..';
import { Products } from '../../types/products';
import { useProductsQuery } from '../../services/queries/products.query';

export default function LastReleases() {
  const { data } = useProductsQuery();
  return (
    <>
      <S.LastReleasesWrapper>
        <h1>Últimos lançamentos</h1>
        <S.ProductBox>
          {data &&
            data.map((frame: Products) => (
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
