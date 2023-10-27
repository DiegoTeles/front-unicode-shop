export interface GetProductsResponse {
  results: Products[];
}

export interface Products {
  title: string;
  description: string;
}
