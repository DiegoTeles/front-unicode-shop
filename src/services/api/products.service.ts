import { GetProductsResponse, Products } from '../../types/products';
import { api } from '../config/api';

export const getAllProducts = async (): Promise<GetProductsResponse> => {
  const { data } = await api.get(`/products`);

  return data.data;
};

export const getProductById = async (
  productId: number
): Promise<GetProductsResponse> => {
  const { data } = await api.get(`/products/${productId}`);

  return data;
};

export const createProduct = async (body: Products) => {
  const { data } = await api.post(`/products/create`, body);

  return { results: data.data };
};

export const deleteProduct = async (productId: number) => {
  const { data } = await api.delete(`/products/${productId}`);

  return { results: data.data };
};

export const editProduct = async (body: Products) => {
  console.log('body :>> ', body);
  const { data } = await api.patch(`/products/${body.id}`, body);

  return { results: data.data };
};
