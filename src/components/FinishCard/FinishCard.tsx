import * as S from './styles';

export default function FinishCard() {
  return (
    <S.Finish>
      <h3>Resumo do pedido</h3>
      <S.Box>
        <div>
          <p>1 produto</p>
        </div>
        <div>
          <p>R$ 25,00</p>
        </div>
      </S.Box>
      <S.Divider />
      <S.Box>
        <div>
          <h2>Total</h2>
        </div>
        <div>
          <h2>R$ 25,00</h2>
        </div>
      </S.Box>
      <S.Divider />

      <S.Button>Finalizar compra</S.Button>
    </S.Finish>
  );
}
