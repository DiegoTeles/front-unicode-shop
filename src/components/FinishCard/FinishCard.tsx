import { useState } from 'react';
import * as S from './styles';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { CreditCard } from '..';
import { censureCardNumber } from '../../utils/maskedCardNumber';

export default function FinishCard() {
  const [selectedcard, setSelectedCard] = useState<boolean>(false);
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
    cvv: Yup.string().required('CVV é obrigatório'),
  });

  const handleEditCard = (cardValues) => {};

  const handleRemoveCard = (cardId) => {};
  const handleSelectCard = (cardValues) => {
    setSelectedCard(!selectedcard);

    const selectedCardData = {
      name: 'Nome do Cartão',
      validateMonth: '12',
      validateYear: '2024',
      numberCard: '5655565656564444',
      cvv: '123',
    };

    formik.setValues({
      name: selectedcard ? selectedCardData.name : '',
      validateMonth: selectedcard ? selectedCardData.validateMonth : '',
      validateYear: selectedcard ? selectedCardData.validateYear : '',
      numberCard: selectedcard ? selectedCardData.numberCard : '',
      cvv: selectedcard ? selectedCardData.cvv : '',
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
      />
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
                {Array.from({ length: 8 }, (_, index) => (
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
            />
          </S.Input>
        </S.Box>
        <h3>Cartões cadastrados</h3>

        {Array.from({ length: 2 }, (_, index) => (
          <S.Cards className={selectedcard && 'active'}>
            <p onClick={() => handleSelectCard(1)}>
              {censureCardNumber('5655 5656 5656 4444')}
            </p>
            <S.ActionsButton>
              <AiFillEdit onClick={handleEditCard} />
              <AiFillDelete onClick={handleRemoveCard} />
            </S.ActionsButton>
          </S.Cards>
        ))}
        <S.ButtonContainer>
          <S.Button type='submit'>Finalizar compra</S.Button>
        </S.ButtonContainer>
      </form>
    </S.FinishWrapper>
  );
}
