import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { Button } from '../../../../components/Button'
import { FormContainer } from '../CheckoutForm/styles'
import { FormHeader } from '../FormHeader'
import { ButtonsGridContainer } from './styles'

export function PaymentTypeForm() {
  const { setValue } = useFormContext()
  const [type, setType] = useState('')

  function handleSelect(typePayment: string) {
    setValue('paymentType', typePayment)
    setType(typePayment)
  }

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
          isSelected={type === 'credit_card'}
          handleClick={() => handleSelect('credit_card')}
          icon={<CreditCard size={16} />}
        >
          Cartão de crédito
        </Button>
        <Button
          isSelected={type === 'debit_card'}
          handleClick={() => handleSelect('debit_card')}
          icon={<Bank size={16} />}
        >
          Cartão de débito
        </Button>
        <Button
          isSelected={type === 'money'}
          handleClick={() => handleSelect('money')}
          icon={<Money size={16} />}
        >
          Dinheiro
        </Button>
      </ButtonsGridContainer>
    </FormContainer>
  )
}
