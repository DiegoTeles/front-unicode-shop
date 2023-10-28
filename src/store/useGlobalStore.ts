import { create } from 'zustand';
import { logger } from './logger';
import { Products } from '../types/products';

interface GlobalState {
  allProducts: Products[];
  product: Products;
  productToCartCount: number;
}

export interface GlobalStore extends GlobalState {
  setAllProducts: (allProducts: Products[]) => void;
  setProduct: (product: Products) => void;
  setProductToCartCountUp: () => void;
  setProductToCartCountDown: () => void;
}

const initialState: Pick<GlobalStore, keyof GlobalState> = {
  allProducts: [],
  product: {
    id: 0,
    title: '',
    description: '',
    price: 0,
  },
  productToCartCount: 0,
};

const useGlobalStore = create<GlobalStore>()(
  logger<GlobalStore>(
    (set) => ({
      ...initialState,
      setAllProducts: (allProducts: Products[]) => set({ allProducts }),
      setProduct: (product: Products) => set({ product }),
      setProductToCartCountUp: () =>
        set((state) => ({ productToCartCount: state.productToCartCount + 1 })),
      setProductToCartCountDown: () =>
        set((state) => ({ productToCartCount: state.productToCartCount - 1 })),
    }),
    'globalStore'
  )
);

export default useGlobalStore;
