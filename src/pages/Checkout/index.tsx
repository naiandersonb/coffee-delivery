import { zodResolver } from '@hookform/resolvers/zod'
import { Coffee } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { useOrdersContext } from '../../contexts/OrdersContext'
import { CheckoutForm } from './components/CheckoutForm'
import { CheckoutSummary } from './components/CheckoutSummary'
import { CheckoutContainer, EmptyContainer, GoToMenuButton } from './styles'

const orderFormValidationSchema = zod.object({
  zipCode: zod.string().min(8, 'Insira o CEP corretamente'),
  totalPayment: zod.number(),
  street: zod.string().min(3, 'Campo obrigatório'),
  houseNumber: zod.string().min(2, 'Campo obrigatório'),
  complement: zod.string().optional(),
  district: zod.string().min(3, 'Campo obrigatório'),
  paymentType: zod.string().min(3, 'Campo obrigatório'),
  city: zod.string().min(3, 'Campo obrigatório'),
  uf: zod
    .string()
    .min(2, 'Campo obrigatório')
    .max(2, 'Número de caracteres inválido'),
})

type OrderFormData = zod.infer<typeof orderFormValidationSchema>

export function Checkout() {
  const { orders } = useOrdersContext()
  const navigate = useNavigate()

  const confirmOrderForm = useForm<OrderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
    defaultValues: {
      zipCode: '',
      paymentType: '',
      street: '',
      houseNumber: '',
      complement: '',
      district: '',
      totalPayment: 0,
      city: '',
      uf: '',
    },
  })

  const { handleSubmit, reset } = confirmOrderForm

  function handleConfirmOrder(orderData: OrderFormData) {
    const orderJSON = JSON.stringify(orderData)
    localStorage.setItem('@coffee-delivery:order-1.0.0', orderJSON)
    navigate('/success')
    reset()
  }

  const ordersIsEmpty = Array.isArray(orders) && !orders.length

  if (ordersIsEmpty) {
    return (
      <EmptyContainer>
        <Coffee size={96} className="empty-order-icon" weight="thin" />
        <h2>
          Nada encontrado por aqui, retorne para a página inicial e selecione
          uma opção
        </h2>
        <NavLink to="/" title="go to menu">
          <GoToMenuButton>Ver cardápio</GoToMenuButton>
        </NavLink>
      </EmptyContainer>
    )
  }

  return (
    <form onSubmit={handleSubmit(handleConfirmOrder)}>
      <FormProvider {...confirmOrderForm}>
        <CheckoutContainer>
          <CheckoutForm />
          <CheckoutSummary />
        </CheckoutContainer>
      </FormProvider>
    </form>
  )
}
