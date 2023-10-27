import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/products.service';
import { GetProductsResponse } from '../../types/products';

export const useProductsQuery = (): GetProductsResponse => {
  const { data, isLoading, isError } = useQuery<GetProductsResponse>({
    queryKey: ['getProducts'],
    queryFn: async () => await getProducts(),
  });

  if (isError) {
    throw new Error('Erro ao buscar produtos');
  }

  if (isLoading) {
    return Promise.resolve({ results: [] });
  }

  if (data) {
    return data;
  } else {
    throw new Error('A busca de produtos não retornou dados.');
  }
};
