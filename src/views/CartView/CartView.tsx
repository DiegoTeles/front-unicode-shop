import { CartTable, FinishCard } from '../../components';
import * as S from './styles';

export default function CartView() {
  return (
    <>
      <h1>No seu carrinho </h1>
      <S.CartWrapper>
        <CartTable />
        <FinishCard />
      </S.CartWrapper>
    </>
  );
}
