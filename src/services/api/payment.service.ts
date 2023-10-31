import { CreditCard, GetCreditCardResponse } from '../../types/creditCard';
import { GetProductsResponse } from '../../types/products';
import { api } from '../config/api';

export const getAllCreditCards = async (): Promise<GetProductsResponse> => {
  const { data } = await api.get(`/creditcard`);
  return data.data;
};

export const getCreditCardById = async (
  productId: number
): Promise<GetProductsResponse> => {
  const { data } = await api.get(`/creditcard/${productId}`);

  return { results: data.data };
};

export const deleteCreditCardById = async (
  productId: number
): Promise<GetProductsResponse> => {
  const { data } = await api.delete(`/creditcard/${productId}`);

  return { results: data.data };
};

export const createCreditCard = async (
  body: CreditCard
): Promise<GetCreditCardResponse> => {
  const { data } = await api.post(`/creditcard/create`, body);

  return { results: data };
};
