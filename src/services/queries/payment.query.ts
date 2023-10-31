import { useMutation, useQuery } from '@tanstack/react-query';
import {
  createCreditCard,
  deleteCreditCardById,
  getAllCreditCards,
} from '../api/payment.service';

export const useCreditCardQuery = () => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['getAllCreditcard'],
    queryFn: async () => await getAllCreditCards(),
  });

  return { data, isLoading, isError, refetch };
};

export const useDeleteCreditCardByIdQuery = () => {
  const { data, isSuccess, mutate, mutateAsync } = useMutation({
    mutationFn: async (cardId: number) => await deleteCreditCardById(cardId),
    onError: (error) => {
      throw new Error('Erro ao apagar o cartão de crédito');
    },
    onSuccess(data) {
      return data;
    },
  });

  return { data, isSuccess, mutate, mutateAsync };
};

export const useCreateCreditCardByIdQuery = () => {
  const { data, isSuccess, mutateAsync } = useMutation({
    mutationFn: async (body: any) => await createCreditCard(body),
    onError: (error) => {
      throw new Error('Erro ao criar o cartão de crédito');
    },
    onSuccess(data) {
      return data;
    },
  });

  return { data, isSuccess, mutateAsync };
};
