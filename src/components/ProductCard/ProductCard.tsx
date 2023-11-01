import * as S from './styles';
import Frame from '../../assets/img/frame.png';
import { useNavigate } from 'react-router-dom';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import {
  useDeleteProductQuery,
  useProductsQuery,
} from '../../services/queries/products.query';
import { Modal } from '..';
import useGlobalStore from '../../store/useGlobalStore';
interface OwnProps {
  id?: number;
  title: string;
  description: string;
  price: number;
  isAdmin?: boolean;
}
export default function ProductCard({
  id,
  title,
  description,
  price,
  isAdmin,
}: OwnProps) {
  const navigate = useNavigate();
  const { mutateAsync } = useDeleteProductQuery();
  const { refetch } = useProductsQuery();
  const { isOpenModal, setOpenModal } = useGlobalStore();

  const handleDeleteProduct = async (id: number) => {
    await mutateAsync(id);
    refetch();
  };

  const handleOpenModal = async () => {
    setOpenModal();
  };

  return (
    <>
      {isOpenModal && <Modal id={id} />}
      <S.ProductCardWrapper>
        <S.FrameBox>
          <img src={Frame} alt='Quadro' />

          <h1>{title}</h1>
          <p>{description}</p>

          <S.ButtonContainer>
            {isAdmin ? (
              <>
                <S.ButtonAction onClick={() => handleDeleteProduct(id)}>
                  <AiFillDelete />
                </S.ButtonAction>
                <S.ButtonAction onClick={() => handleOpenModal()}>
                  <AiFillEdit />
                </S.ButtonAction>
              </>
            ) : (
              <S.Button onClick={() => navigate(`/description/${id}`)}>
                Comprar
              </S.Button>
            )}

            <h1>R$ {price}</h1>
          </S.ButtonContainer>
        </S.FrameBox>
      </S.ProductCardWrapper>
    </>
  );
}
