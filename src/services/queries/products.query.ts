import { useQuery } from '@tanstack/react-query';
import { getProductById, getAllProducts } from '../api/products.service';
import { GetProductsResponse } from '../../types/products';

export const useProductsQuery = (): GetProductsResponse => {
  const { data, isLoading, isError } = useQuery<GetProductsResponse>({
    queryKey: ['getAllProducts'],
    queryFn: async () => await getAllProducts(),
  });
  console.log('data :>> ', data);
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

export const useProductByIdQuery = (productId: number): GetProductsResponse => {
  const { data, isLoading, isError } = useQuery<GetProductsResponse>({
    queryKey: ['getProductById', productId],
    queryFn: async () => await getProductById(productId),
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
