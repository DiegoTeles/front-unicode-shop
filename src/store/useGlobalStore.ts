import { create } from 'zustand';
import { logger } from './logger';
import { Products } from '../types/products';
import { CreditCard } from '../types/creditCard';

interface GlobalState {
  allProducts: Products[];
  allCreditCard: CreditCard[];
  product: Products;
  productToCartCount: number;
  isOpenModal: boolean;
  selectedProduct: Products;
}

export interface GlobalStore extends GlobalState {
  setAllProducts: (allProducts: Products[]) => void;
  setAllCreditCard: (allCreditCard: CreditCard[]) => void;
  setProduct: (product: Products) => void;
  setProductToCartCountUp: () => void;
  setProductToCartCountDown: () => void;
  setOpenModal: () => void;
  setSelectedProduct: (selectedProduct: Products) => void;
}

const initialState: Pick<GlobalStore, keyof GlobalState> = {
  allProducts: [],
  allCreditCard: [],
  product: {
    id: 0,
    title: '',
    description: '',
    price: 0,
  },
  productToCartCount: 0,
  isOpenModal: false,
  selectedProduct: { title: '', description: '', price: 0 },
};

const useGlobalStore = create<GlobalStore>()(
  logger<GlobalStore>(
    (set) => ({
      ...initialState,
      setAllProducts: (allProducts: Products[]) => set({ allProducts }),
      setAllCreditCard: (allCreditCard: CreditCard[]) => set({ allCreditCard }),
      setProduct: (product: Products) => set({ product }),
      setProductToCartCountUp: () =>
        set((state) => ({ productToCartCount: state.productToCartCount + 1 })),
      setProductToCartCountDown: () =>
        set((state) => ({ productToCartCount: state.productToCartCount - 1 })),
      setOpenModal: () => set((state) => ({ isOpenModal: !state.isOpenModal })),
      setSelectedProduct: (selectedProduct: Products) =>
        set({ selectedProduct }),
    }),
    'globalStore'
  )
);

export default useGlobalStore;
