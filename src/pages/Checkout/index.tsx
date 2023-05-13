import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { CheckoutForm } from './components/CheckoutForm'
import { CheckoutSummary } from './components/CheckoutSummary'
import { CheckoutContainer } from './styles'

const orderFormValidationSchema = zod.object({
  zidCode: zod.string().min(8, 'Insira o CEP corretamente'),
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
  const confirmOrderForm = useForm<OrderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
    defaultValues: {
      zidCode: '',
      paymentType: '',
      street: '',
      houseNumber: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
    },
  })

  const { handleSubmit, reset } = confirmOrderForm

  function handleConfirmOrder(orderData: OrderFormData) {
    console.log({ orderData })
    reset()
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
