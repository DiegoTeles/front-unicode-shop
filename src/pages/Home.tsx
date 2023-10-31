import { useProductsQuery } from '../services/queries/products.query';
import { HomeView } from '../views';
import useGlobalStore from '../store/useGlobalStore';
import { useEffect } from 'react';

function Home() {
  const { results } = useProductsQuery();
  const { setAllProducts } = useGlobalStore();

  useEffect(() => {
    if (results) {
      setAllProducts(results);
    }
  }, [results, setAllProducts]);
  return <HomeView />;
}

export default Home;
