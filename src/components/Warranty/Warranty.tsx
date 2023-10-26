import styled from 'styled-components';
import WarrantCert from '../../assets/img/icons/certified-warranty.png';
import DeliveryTruck from '../../assets/img/icons/delivery-truck.png';
import Quality from '../../assets/img/icons/quality.png';

export default function Warranty() {
  return (
    <>
      <WarrantyrWrapper>
        <Box>
          <img src={WarrantCert} alt='Quadro' />
          <h1>Compra garantida</h1>
        </Box>
        <Box>
          <img src={DeliveryTruck} alt='Quadro' />
          <h1>Entrega em todo o Brasil</h1>
        </Box>
        <Box>
          <img src={Quality} alt='Quadro' />
          <h1>Qualidade comprovada</h1>
        </Box>
      </WarrantyrWrapper>
    </>
  );
}

const WarrantyrWrapper = styled.div`
  width: 1124px;
  height: 124px;
  background: #ede6db;
  display: flex;
  justify-content: space-around;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 39px;
    height: 39px;
  }
  h1 {
    color: #000;
    font-size: 16px;
  }
`;
