import * as S from './styles';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { getErrorMessages } from '../../utils/getErrorMessages';
import {
  useCreateProductQuery,
  useEditProductQuery,
  useProductsQuery,
} from '../../services/queries/products.query';
import { Products } from '../../types/products';
import { useEffect } from 'react';
import useGlobalStore from '../../store/useGlobalStore';

interface OwnProps {
  isModal?: boolean;
  header: string;
  productData: Products;
}
export default function ProductForm({
  header,
  productData,
  isModal,
}: OwnProps) {
  const { setOpenModal } = useGlobalStore();

  const { mutateAsync } = useCreateProductQuery();
  const { mutateAsync: editMutateAsync } = useEditProductQuery();
  const { refetch } = useProductsQuery();

  const initialValues = {
    title: '',
    description: '',
    price: 0,
  };

  useEffect(() => {
    if (productData) {
      formik.setValues({
        title: productData.title,
        description: productData?.description,
        price: productData?.price,
      });
    }
  }, [productData]);

  const validationSchema = Yup.object({
    title: Yup.string().required('Nome do produto é obrigatório'),
    description: Yup.string().required('Descrição é obrigatória'),
    price: Yup.number().required('Preço é obrigatório'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const data: Products = {
        title: values.title,
        description: values.description,
        price: values.price ? +values.price : 0,
      };
      if (isModal) {
        await editMutateAsync({ ...data, id: productData.id });
        setOpenModal();
      } else {
        await mutateAsync(data);
      }
      refetch();
    },
  });

  const errorMessages = getErrorMessages(formik);

  return (
    <S.ProductWrapper isModal={isModal}>
      <h3>{header}</h3>
      <form onSubmit={formik.handleSubmit}>
        <S.Box>
          <S.Input>
            <label>*Nome do produto </label>

            <input
              type='text'
              className='title'
              name='title'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              maxLength={40}
            />
          </S.Input>
          <S.Input>
            <label>*Preço </label>
            <input
              type='number'
              className='number-cvv'
              name='price'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
          </S.Input>
        </S.Box>
        <S.Box>
          <S.Input>
            <label>*Descrição </label>
            <textarea
              type='text'
              className='number-card'
              name='description'
              rows={4}
              maxLength={60}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
          </S.Input>
        </S.Box>
        {errorMessages.length ? (
          <div className='error-messages'>
            {errorMessages.map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        ) : (
          <></>
        )}
        <S.ButtonContainer>
          <S.Button type='submit'>Criar produto</S.Button>
        </S.ButtonContainer>
      </form>
    </S.ProductWrapper>
  );
}
