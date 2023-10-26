import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 386px;
  padding: 40px;
  background-color: #ede6db;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
`;

export const TextBox = styled.div`
  line-height: normal;
  padding: 40px 0;
  background-color: #ede6db;
`;

export const ImageBox = styled.div`
  padding: 40px;
  background-color: #ede6db;
  align-items: center;
`;

export const Button = styled.button`
  padding: 8px 30px;
  background-color: #ede6db;
  align-items: center;
  color: #fff;
  background-color: #000;
  border: none;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
