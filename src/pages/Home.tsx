import { useProductsQuery } from '../services/queries/products.query';
import { HomeView } from '../views';
import useGlobalStore from '../store/useGlobalStore';
import { useEffect } from 'react';

function Home() {
  const { results } = useProductsQuery();
  const { products, setProducts } = useGlobalStore();

  useEffect(() => {
    if (results) {
      setProducts(results);
    }
  }, [results, setProducts]);
  console.log('products :>> ', products);
  return <HomeView />;
}

export default Home;
