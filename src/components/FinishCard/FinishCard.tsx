import { useState } from 'react';
import * as S from './styles';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AiFillDelete } from 'react-icons/ai';
import { CreditCard } from '..';
import { censureCardNumber } from '../../utils/maskedCardNumber';
import { usePayment } from '../../hooks/usePayment';
import { Products } from '../../types/products';
import { formatDate } from '../../utils/formatDate';
import { CreditCard as CreditCardType } from '../../types/creditCard';
import {
  useCreateCreditCardByIdQuery,
  useCreditCardQuery,
  useDeleteCreditCardByIdQuery,
} from '../../services/queries/payment.query';

interface OwnProps {
  products: Products[];
}

export default function FinishCard({ products }: OwnProps) {
  const [selectedcard, setSelectedCard] = useState<CreditCardType>();
  const { data, refetch } = useCreditCardQuery();
  const { mutateAsync } = useDeleteCreditCardByIdQuery();
  const { mutateAsync: mutateCreateAsync } = useCreateCreditCardByIdQuery();

  const makePayment = usePayment();
  const initialValues = {
    name: '',
    validateMonth: '',
    validateYear: '',
    numberCard: '',
    cvv: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Nome é obrigatório'),
    validateMonth: Yup.string().required('Mês é obrigatório'),
    validateYear: Yup.string().required('Ano é obrigatório'),
    numberCard: Yup.string().required('Número do cartão é obrigatório').max(16),
    cvv: Yup.string()
      .matches(/^[0-9]{1,4}$/, 'O número deve conter no máximo 4 dígitos')
      .required('CVV é obrigatório'),
  });

  const handleRemoveCard = async (cardId: number) => {
    await mutateAsync(cardId);
    refetch();
  };

  const handleMakePayment = async () => {
    await makePayment(products);
    refetch();
  };

  const handleSelectCard = (cardValues: CreditCardType) => {
    setSelectedCard(cardValues);

    const [month, year] = formatDate(cardValues.exp_date).split('/');

    const selectedCardData = {
      name: cardValues.holder,
      validateMonth: month,
      validateYear: year,
      numberCard: cardValues.number,
      cvv: cardValues.cvv,
    };

    formik.setValues({
      name: selectedcard ? selectedCardData.name : '',
      validateMonth: selectedcard ? selectedCardData.validateMonth : '',
      validateYear: selectedcard ? selectedCardData.validateYear : '',
      numberCard: selectedcard ? selectedCardData.numberCard : '',
      cvv: '',
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const exp_date = `${values.validateMonth}/${values.validateYear}`;
      const data = {
        exp_date: exp_date,
        holder: values.name,
        number: values.numberCard,
        cvv: values.cvv,
      };
      await mutateCreateAsync(data);
      refetch();
    },
  });

  return (
    <S.FinishWrapper>
      <CreditCard
        name={formik.values.name}
        cardNumber={formik.values.numberCard}
        validateMonth={formik.values.validateMonth}
        validateYear={formik.values.validateYear}
        cvv={formik.values.cvv}
      />{' '}
      <form onSubmit={formik.handleSubmit}>
        <S.Box>
          <S.Input>
            <label>
              *Nome no cartão{' '}
              {formik.touched.name && formik.errors.name ? (
                <p className='error-msg'>{formik.errors.name}</p>
              ) : null}
            </label>

            <input
              type='text'
              className='name'
              name='name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </S.Input>
          <S.Input>
            <label>
              *Validade
              {formik.touched.validateMonth && formik.errors.validateMonth ? (
                <p className='error-msg'>{formik.errors.validateMonth}</p>
              ) : null}
              {formik.touched.validateYear && formik.errors.validateYear ? (
                <p className='error-msg'>{formik.errors.validateYear}</p>
              ) : null}
            </label>
            <div>
              <select
                name='validateMonth'
                className='validate-month'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.validateMonth}
              >
                <option value=''>Mês</option>
                {Array.from({ length: 12 }, (_, index) => (
                  <option key={index} value={(index + 1).toString()}>
                    {(index + 1).toString()}
                  </option>
                ))}
              </select>

              <select
                className='validate-year'
                name='validateYear'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.validateYear}
              >
                <option value=''>Ano</option>
                {Array.from({ length: 10 }, (_, index) => (
                  <option key={index} value={(index + 2024).toString()}>
                    {(index + 2024).toString()}
                  </option>
                ))}
              </select>
            </div>
          </S.Input>
        </S.Box>
        <S.Box>
          <S.Input>
            <label>
              *Número do cartão{' '}
              {formik.touched.numberCard && formik.errors.numberCard ? (
                <p className='error-msg'>{formik.errors.numberCard}</p>
              ) : null}
            </label>
            <input
              type='text'
              className='number-card'
              name='numberCard'
              maxLength={16}
              max={16}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.numberCard}
            />
          </S.Input>
          <S.Input>
            <label>
              *CVV{' '}
              {formik.touched.cvv && formik.errors.cvv ? (
                <p className='error-msg'>{formik.errors.cvv}</p>
              ) : null}
            </label>
            <input
              type='text'
              className='number-cvv'
              name='cvv'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.cvv}
              maxLength={4}
              max={4}
              pattern='[0-9]*'
            />
          </S.Input>
        </S.Box>
        <h3>Cartões cadastrados</h3>
        <S.CardContainer>
          {data?.length ? (
            data.map((card: CreditCardType, index: number) => (
              <S.Cards
                key={index}
                onClick={() => handleSelectCard(card)}
                className={selectedcard?.id === card.id && 'active'}
              >
                <p>{censureCardNumber(card.number)}</p>
                <S.ActionsButton>
                  <AiFillDelete onClick={() => handleRemoveCard(card.id)} />
                </S.ActionsButton>
              </S.Cards>
            ))
          ) : (
            <>Não existe cartões cadastrados</>
          )}
        </S.CardContainer>
        <S.ButtonContainer>
          <S.Button type='submit'>Salvar cartão</S.Button>
          <S.Button onClick={() => handleMakePayment()}>
            Finalizar compra
          </S.Button>
        </S.ButtonContainer>
      </form>
    </S.FinishWrapper>
  );
}
