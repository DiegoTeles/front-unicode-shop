import styled from 'styled-components';

export const FinishWrapper = styled.div`
  margin-top: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 560px;
  height: 225px;
  border-radius: 4px;
  border-radius: 0px 23px 23px 0px;
  background: #fff;

  padding: 170px 30px 30px;
  width: 494px;
  height: 100%;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Input = styled.div`
  display: grid;
  margin: 0 0 20px;

  .error-msg {
    font-size: 12px;
    color: red;
  }
  label {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #5c5c5c;
    font-family: Roboto;
    font-size: 11px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  div {
    display: flex;
    gap: 8px;
    padding: 0 8px 0 0;
  }
  input, select {
    border-radius: 3px;
    border: 1px solid #dedede;
    background: #fff;
  }
  input.name {
    width: 245px;
    height: 31px;
  }

  select.validate-month {
    width: 58px;
    height: 31px;
  }
  input.validate-year {
    width: 58px;
    height: 31px;
  }

  input.number-card {
    width: 320px;
    height: 31px;
  }

  input.number-cvv {
    width: 58px;
    height: 31px;
  }
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 10px 10px;
  border: 2px solid rgba(0, 0, 0, 0.14);
  height: 42px;
  margin: 8px 0 20px;
  border-radius: 4px;
  cursor: pointer;

  &.active {
    border: 2px solid #8fbdd3;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ActionsButton = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  svg {
    cursor: pointer;
    z-index: 9;
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
