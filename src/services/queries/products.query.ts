import { useMutation, useQuery } from '@tanstack/react-query';
import {
  getProductById,
  getAllProducts,
  createProduct,
  deleteProduct,
  editProduct,
} from '../api/products.service';
import { GetProductsResponse, Products } from '../../types/products';

export const useProductsQuery = () => {
  const { data, isLoading, isError, refetch } = useQuery<GetProductsResponse>({
    queryKey: ['getAllProducts'],
    queryFn: async () => await getAllProducts(),
  });

  return { data, isLoading, isError, refetch };
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

export const useCreateProductQuery = () => {
  const { data, isSuccess, mutateAsync } = useMutation({
    mutationFn: async (body: Products) => await createProduct(body),
    onError: (error) => {
      throw new Error('Erro ao criar produto');
    },
    onSuccess(data) {
      return data;
    },
  });

  return { data, isSuccess, mutateAsync };
};

export const useDeleteProductQuery = () => {
  const { data, isSuccess, mutateAsync } = useMutation({
    mutationFn: async (productId: number) => await deleteProduct(productId),
    onError: (error) => {
      throw new Error('Erro ao deletar produto');
    },
    onSuccess(data) {
      return data;
    },
  });

  return { data, isSuccess, mutateAsync };
};

export const useEditProductQuery = () => {
  const { data, isSuccess, mutateAsync } = useMutation({
    mutationFn: async (body: Products) => await editProduct(body),
    onError: (error) => {
      throw new Error('Erro ao deletar produto');
    },
    onSuccess(data) {
      return data;
    },
  });

  return { data, isSuccess, mutateAsync };
};
