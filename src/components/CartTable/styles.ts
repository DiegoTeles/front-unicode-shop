import styled from 'styled-components';

export const CartWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const TableHead = styled.th`
  text-align: left;
  width: 160px;
  border-bottom: 1px solid #e2e2e2;
`;

export const TableRow = styled.tr``;

export const TableData = styled.td`
  padding: 20px 0;
  align-items: center;
  text-align: left;
  img {
    width: 55.424px;
    height: 67.627px;
  }

  h1 {
    font-size: 20px;
  }
  p {
    font-size: 16px;
    width: 400px;
  }
`;

export const IconButton = styled.button`
  background-color: #f96e71;
  border-radius: 50%;
  border: none;
  padding: 8px;
  line-height: 0;

  svg {
    color: #fff;
    font-size: 18px;
  }
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Button = styled.button`
  background-color: #000;
  color: #ffff;
  font-weight: 600;
  width: 136px;
  height: 33px;
  border-radius: 19px;
  border: none;
  padding: 8px;
  line-height: 0;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const TableContent = styled.div`
  padding: 10px 40px;
  border-radius: 4px;
  background-color: #fff;
  height: 100%;
`;

export const TableCard = styled.div`
  margin-top: 100px;
  width: 70%;
  padding: 10px 40px;
  border-radius: 23px 0 0 23px;
  background-color: #fff;
  height: 100%;

  table {
    width: 100%;
  }
`;

export const Finish = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  text-align: left;
  width: 256px;
  height: 225px;
  padding: 20px;
  border-radius: 4px;
  font-weight: 600;

  h2 {
    font-size: 14px;
  }

  p {
    margin-top: 10px;
    color: #8d8c8c;
    font-size: 13px;
    font-style: normal;
  }
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 16px;
  }

  p {
    margin-top: 10px;
    color: #8d8c8c;
    font-size: 13px;
    font-style: normal;
  }
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.14);
`;
