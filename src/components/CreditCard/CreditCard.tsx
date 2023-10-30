import * as S from './styles';
import Logo from '../../assets/img/logo.png';
import { addSpacesToNumber } from '../../utils/maskedCardNumber';

interface OwnCardProps {
  name: string;
  cardNumber: string;
  validateMonth: string;
  validateYear: string;
  cvv: string;
}
export default function CreditCard({
  name,
  cardNumber,
  validateMonth,
  validateYear,
  cvv,
}: OwnCardProps) {
  return (
    <S.CreditCardWrapper>
      <S.Brand>
        <img src={Logo} alt='' />
      </S.Brand>
      <S.CardNumber>
        <h1>
          {cardNumber ? addSpacesToNumber(cardNumber) : '5655 5656 5656 5656'}
        </h1>
      </S.CardNumber>
      <S.MoreInfos>
        <div>
          <p>Nome no cartão</p>
          <h2>{name ? name : 'Nome teste'}</h2>
        </div>
        <div>
          <p>Validade</p>
          <h2>
            {validateMonth ? validateMonth : 'XX'}/
            {validateYear ? validateYear : 'XXXX'}
          </h2>
        </div>
        <div>
          <p>CVV</p>
          <h2>{cvv}</h2>
        </div>
      </S.MoreInfos>
    </S.CreditCardWrapper>
  );
}
