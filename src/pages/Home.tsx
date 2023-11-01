import { useProductsQuery } from '../services/queries/products.query';
import { HomeView } from '../views';
import useGlobalStore from '../store/useGlobalStore';
import { useEffect } from 'react';

function Home() {
  const { data } = useProductsQuery();
  const { setAllProducts } = useGlobalStore();

  useEffect(() => {
    if (data) {
      setAllProducts(data);
    }
  }, [data, setAllProducts]);
  return <HomeView />;
}

export default Home;
