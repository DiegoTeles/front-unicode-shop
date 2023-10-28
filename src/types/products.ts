export interface GetProductsResponse {
  results: Products[];
}

export interface Products {
  id: number
  title: string;
  description: string;
  price: number;
}
