import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductDescriptionView } from '../views';
import useGlobalStore from '../store/useGlobalStore';
import { useProductByIdQuery } from '../services/queries/products.query';

function ProductDescription() {
  const { id }: string = useParams();
  const { results } = useProductByIdQuery(id);
  const { setProduct } = useGlobalStore();

  useEffect(() => {
    if (results) {
      setProduct(results);
    }
  }, [results, setProduct]);
  return (
    <>
      <ProductDescriptionView />
    </>
  );
}

export default ProductDescription;
