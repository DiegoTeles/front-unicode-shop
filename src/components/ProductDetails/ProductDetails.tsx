import styled from 'styled-components';
import Frame from '../../assets/img/frame.png';

export default function ProductDetails() {
  return (
    <>
      <ProductDetailsWrapper>
        <FrameBox>
          <img src={Frame} alt='Quadro' />
        </FrameBox>
        <DescriptionBox>
          <h1>Quadro Monalisa Cat</h1>

          <p>Super decoração com o tema de gatos para seu ambiente</p>
          <h2>R$ 25,00</h2>
          <Button>Comprar</Button>
        </DescriptionBox>
      </ProductDetailsWrapper>
    </>
  );
}

const ProductDetailsWrapper = styled.div`
  margin-top: 50px;
  height: 386px;
  padding: 40px;
  display: flex;
  justify-content: space-evenly;
  text-align: left;
  align-items: flex-start;
  gap: 60px;
`;

const FrameBox = styled.div`
  justify-content: flex-end;

  img {
    width: 270.901px;
    height: 326px;
  }
`;

const DescriptionBox = styled.div`
  margin-top: 30px;
  width: 450px;

  p {
    width: 312px;
    margin-bottom: 20px;
  }
`;

const Button = styled.button`
  padding: 8px 30px;
  background-color: #ede6db;
  align-items: center;
  color: #fff;
  background-color: #000;
  border: none;
  margin-top: 20px;
  border-radius: 19px;
  width: 98px;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
