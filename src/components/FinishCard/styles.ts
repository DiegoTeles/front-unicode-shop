import styled from 'styled-components';

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
