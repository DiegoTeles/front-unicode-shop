import styled from 'styled-components';

export const ProductCardWrapper = styled.div`
  margin-top: 50px;
  height: 386px;
  padding: 40px;
  display: flex;
  justify-content: space-evenly;
  text-align: left;
  gap: 20px;
`;

export const FrameBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
  border-radius: 22px 0px;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: #ede6db;
  width: 235px;
  height: 272px;
  flex-shrink: 0;

  img {
    position: absolute;
    top: -50px;
    left: 20px;
    width: 109px;
    height: 133px;
    flex-shrink: 0;
  }
  h1 {
    margin-top: 20px;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const Button = styled.button`
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
