import { Modal, Button } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import { ProductForm } from '..';
import useGlobalStore from '../../store/useGlobalStore';
import { useProductByIdQuery } from '../../services/queries/products.query';

interface OwnProps {
  id?: number;
}
export default function ModalWrapper({ id }: OwnProps) {
  const { setOpenModal } = useGlobalStore();
  const { data } = useProductByIdQuery(id);
  const handleClose = () => {
    setOpenModal();
  };

  return (
    <>
      <Modal open={true} onClose={handleClose}>
        <Modal.Body>
          <ProductForm isModal={true} header='Editar produto' productData={data} />
        </Modal.Body>
      </Modal>
    </>
  );
}
