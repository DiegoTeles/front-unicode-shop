import * as S from './styles';
import WarrantCert from '../../assets/img/icons/certified-warranty.png';
import DeliveryTruck from '../../assets/img/icons/delivery-truck.png';
import Quality from '../../assets/img/icons/quality.png';

export default function Warranty() {
  return (
    <>
      <S.WarrantyrWrapper>
        <S.Box>
          <img src={WarrantCert} alt='Quadro' />
          <h1>Compra garantida</h1>
        </S.Box>
        <S.Box>
          <img src={DeliveryTruck} alt='Quadro' />
          <h1>Entrega em todo o Brasil</h1>
        </S.Box>
        <S.Box>
          <img src={Quality} alt='Quadro' />
          <h1>Qualidade comprovada</h1>
        </S.Box>
      </S.WarrantyrWrapper>
    </>
  );
}
