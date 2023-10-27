import { create } from 'zustand'; 
import { logger } from './logger';
import { Products } from '../types/products';

interface GlobalState {
  products: Products[];
}

export interface GlobalStore extends GlobalState {
  setProducts: (products: Products[]) => void;
}

const initialState: Pick<GlobalStore, keyof GlobalState> = {
  products: [],
};

const useGlobalStore = create<GlobalStore>()(
  logger<GlobalStore>(
    (set) => ({
      ...initialState,
      products: [],
      setProducts: (products: Products[]) => set({ products }),
    }),
    'globalStore'
  )
);

export default useGlobalStore;
