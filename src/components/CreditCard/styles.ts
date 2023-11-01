import styled from 'styled-components';

export const CreditCardWrapper = styled.div`
  position: absolute;
  top: -80px;
  right: 50%;
  left: 7%;
  width: 410px;
  height: 225px;
  border-radius: 15px;
  background: #8fbdd3;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 20px 30px 30px 20px;

  p {
    color: #e5e5e5;
    font-size: 13px;
  }
`;
export const Brand = styled.div`
  img {
    max-width: 64px;
    height: auto;
  }
`;
export const CardNumber = styled.div`
  h1 {
    color: #fff;
    height: 52px;
    font-size: 32px;
  }
`;
export const MoreInfos = styled.div`
  display: flex;
  justify-content: space-between;

  h2 {
    font-size: 24px;
    color: #fff;
  }
`;
