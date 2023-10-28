import styled from 'styled-components';

export const CartBadgeWrapper = styled.div`
  position: relative;
  padding: 8px 10px;
`;

export const Badge = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-weight: 600;
  background-color: #F56B6B;
  border-radius: 50%;
  top: -2px;
  right: 4px;
`;
