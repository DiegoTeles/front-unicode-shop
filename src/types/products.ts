export interface GetProductsResponse {
  data: Products[];
}

export interface Products {
  id?: number
  title: string;
  description: string;
  price: number;
}
