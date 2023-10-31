import { useEffect } from 'react';
import { useCreditCardQuery } from '../services/queries/payment.query';
import useGlobalStore from '../store/useGlobalStore';
import { CartView } from '../views';

function Cart() {
  const { data } = useCreditCardQuery();
  const { setAllCreditCard } = useGlobalStore();

  useEffect(() => {
    if (data) {
      setAllCreditCard(data);
    }
  }, [data, setAllCreditCard]);

  return <CartView />;
}
export default Cart;
