import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { Button } from '../../../../components/Button'
import { FormContainer } from '../CheckoutForm/styles'
import { FormHeader } from '../FormHeader'
import { ButtonsGridContainer } from './styles'

export function PaymentTypeForm() {
  const { setValue, watch } = useFormContext()

  function handleSelect(typePayment: string) {
    setValue('paymentType', typePayment)
  }

  const typePayment = watch('typePayment')

  return (
    <FormContainer>
      <FormHeader
        title="Endereço de entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
      >
        <CurrencyDollar size={24} className="payment-icon" />
      </FormHeader>

      <ButtonsGridContainer>
        <Button
          isSelected={typePayment === 'credit_card'}
          handleClick={() => handleSelect('credit_card')}
          icon={<CreditCard size={16} />}
        >
          Cartão de crédito
        </Button>
        <Button
          isSelected={typePayment === 'debit_card'}
          handleClick={() => handleSelect('debit_card')}
          icon={<Bank size={16} />}
        >
          Cartão de débito
        </Button>
        <Button
          isSelected={typePayment === 'money'}
          handleClick={() => handleSelect('money')}
          icon={<Money size={16} />}
        >
          Dinheiro
        </Button>
      </ButtonsGridContainer>
    </FormContainer>
  )
}
