import styled from 'styled-components';

export const NavbarWrapper = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #5f5e5e47;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: flex-end;
  line-height: normal;
  gap: 20px;
  align-items: center;

  svg {
    font-size: 26px;
    cursor: pointer;
  }
`;

export const Logo = styled.div`
  line-height: normal;
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
