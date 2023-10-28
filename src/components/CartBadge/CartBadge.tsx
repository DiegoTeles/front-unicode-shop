import * as S from './styles';
import { BsCart4 } from 'react-icons/bs';

interface OwnProps {
  countProducts: number;
}
export default function CartBadge({ countProducts }: OwnProps) {
  return (
    <S.CartBadgeWrapper>
      {countProducts ? <S.Badge>{countProducts}</S.Badge> : <></>}
      <BsCart4 />
    </S.CartBadgeWrapper>
  );
}
