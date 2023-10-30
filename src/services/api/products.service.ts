import { loadStripe } from '@stripe/stripe-js';
import { GetProductsResponse, Products } from '../../types/products';
import { api } from '../config/api';

const publishKey =
  'pk_test_51JJX3bCghffXS7LvnG0u0XsPUSrMEsDY1wHwScFPhMJsOnWhKIgpDSBll3QGSK4ceywbfzO8sayH90vJ1Yv9ACHN00sZO7gIgM';

export const getAllProducts = async (): Promise<GetProductsResponse> => {
  // const URL = ` `;
  //const { data } = await api.get(URL);

  const results: Products[] = [
    {
      id: 1,
      title: 'Produto 1',
      description: 'Super decoração com o tema de gatos para seu ambiente',
      price: 25,
    },
    {
      id: 2,
      title: 'Produto 2',
      description: 'Super decoração com o tema de gatos para seu ambiente',
      price: 25,
    },
  ];
  return { results };
};

export const getProductById = async (
  productId: number
): Promise<GetProductsResponse> => {
  // const URL = ` `;
  //const { data } = await api.get(URL);
  console.log('productId :>> ', productId);
  const results: Products[] = [
    {
      id: 1,
      title: 'Produto 1',
      description: 'Super decoração com o tema de gatos para seu ambiente',
      price: 25,
    },
  ];
  return { results };
};
