import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductDescriptionView } from '../views';
import useGlobalStore from '../store/useGlobalStore';
import { useProductByIdQuery } from '../services/queries/products.query';

function ProductDescription() {
  //const { id }: number = useParams();
  const { results } = useProductByIdQuery(1);
  const { setProduct } = useGlobalStore();

  useEffect(() => {
    if (results) {
      setProduct(results[0]);
    }
  }, [results, setProduct]);
  return (
    <>
      <ProductDescriptionView />
    </>
  );
}

export default ProductDescription;
