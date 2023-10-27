import { GetProductsResponse, Products } from '../../types/products';
//import { api } from '../config/api';

export const getProducts = async (): Promise<GetProductsResponse> => {
  // const URL = ` `;
  //const { data } = await api.get(URL);

  const results: Products[] = [
    {
      title: 'Produto 1',
      description: 'Descrição do Produto 1',
    },
    {
      title: 'Produto 2',
      description: 'Descrição do Produto 2',
    },
  ];
  return { results };
};
