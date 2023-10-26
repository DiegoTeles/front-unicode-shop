import styled from 'styled-components';

export default function Header() {
  return (
    <>
      <HeaderWrapper>
        <TextBox>
          <h1>Unicode</h1>
          <h1>Quadros decorativos</h1>

          <Button>Ver quadros</Button>
        </TextBox>
        <ImageBox>Unicode Quadros decorativos</ImageBox>
      </HeaderWrapper>
    </>
  );
}

const HeaderWrapper = styled.div`
  height: 386px;
  padding: 40px;
  background-color: #ede6db;
  display: flex;
  justify-content: space-evenly;
  gap: 20px;
`;

const TextBox = styled.div`
  line-height: normal;
  padding: 40px 0;
  background-color: #ede6db;
`;

const ImageBox = styled.div`
  padding: 40px;
  background-color: #ede6db;
  align-items: center;
`;

const Button = styled.button`
  padding: 8px 30px;
  background-color: #ede6db;
  align-items: center;
  color: #fff;
  background-color: #000;
  border: none;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    opacity: .8;
  }
`;
