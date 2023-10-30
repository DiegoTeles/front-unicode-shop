import { Products } from "../types/products";

export function sumProductPrices(products: Products[]) {
    const totalPrice = products.reduce((accumulator, product) => {
      return accumulator + product.price;
    }, 0);
  
    return totalPrice.toFixed(2);
  }