import * as S from './styles';
import useGlobalStore from '../../store/useGlobalStore';
import { ProductCard, ProductForm } from '../../components';
import { Products } from '../../types/products';
import { useProductsQuery } from '../../services/queries/products.query';
import { useEffect } from 'react';

export default function Admin() {
  const { data } = useProductsQuery();
  const { setAllProducts, allProducts } = useGlobalStore();

  useEffect(() => {
    if (data) {
      setAllProducts(data);
    }
  }, [data, setAllProducts]);

  return (
    <>
      <S.AdminWrapper>
        <ProductForm header='Criar produto'/>
        <S.ProductContainer>
          {allProducts.map((item: Products) => (
            <ProductCard
              isAdmin={true}
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </S.ProductContainer>
      </S.AdminWrapper>
    </>
  );
}
