import * as S from './styles';
import Frame from '../../assets/img/frame.png';
import { RiDeleteBin6Fill } from 'react-icons/ri';

export default function CartTable() {
  return (
    <S.TableCard>
      <table>
        <S.TableRow>
          <S.TableHead colSpan={3}>Item</S.TableHead>
          <S.TableHead colSpan={3}>Descrição</S.TableHead>
          <S.TableHead colSpan={2}>Valor</S.TableHead>
          <S.TableHead>Ação</S.TableHead>
        </S.TableRow>
        <S.TableRow>
          <S.TableData colSpan={3}>
            <img src={Frame} alt='Quadro' />
          </S.TableData>
          <S.TableData colSpan={3}>
            <h1>Quadro Monalisa Cats</h1>
            <p>Super decoração com o tema de gatos para seu ambiente</p>
          </S.TableData>
          <S.TableData colSpan={2}>
            <h1>R$ 25,00</h1>
          </S.TableData>
          <S.TableData>
            <S.IconButton>
              <RiDeleteBin6Fill />
            </S.IconButton>
          </S.TableData>
        </S.TableRow>
      </table>
    </S.TableCard>
  );
}
