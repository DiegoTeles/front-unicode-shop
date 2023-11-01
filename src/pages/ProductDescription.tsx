import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductDescriptionView } from '../views';
import useGlobalStore from '../store/useGlobalStore';
import { useProductByIdQuery } from '../services/queries/products.query';

function ProductDescription() {
  const { id }: string = useParams();
  const { data } = useProductByIdQuery(id);
  const { setProduct } = useGlobalStore();

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data, setProduct]);
  return (
    <>
      <ProductDescriptionView />
    </>
  );
}

export default ProductDescription;
