import { GetProductsResponse } from '../../types/products';
import { api } from '../config/api';

export const getAllProducts = async (): Promise<GetProductsResponse> => {
  const { data } = await api.get(`/products`);

  return { results: data.data };
};

export const getProductById = async (
  productId: number
): Promise<GetProductsResponse> => {
  const { data } = await api.get(`/products/${productId}`);

  return { results: data.data };
};
