import styled from 'styled-components';
import { PorductCard } from '../../components';

export default function LastReleases() {
  return (
    <>
      <HeaderWrapper>
        <h1>Últimos lançamentos</h1>
        <ProductBox>
          <PorductCard />
          <PorductCard />
          <PorductCard />
        </ProductBox>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.div`
  height: 386px;
  padding: 40px;
  text-align: center;
  gap: 20px;
`;

const ProductBox = styled.div`
  display: flex;
  justify-content: center;
`;
