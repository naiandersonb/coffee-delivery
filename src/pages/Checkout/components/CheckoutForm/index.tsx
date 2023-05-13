import { MapPinLine } from 'phosphor-react'
import { FormContent } from '../FormContent'
import { FormHeader } from '../FormHeader'
import { PaymentTypeForm } from '../PaymentTypeForm'
import { FormContainer } from './styles'

export function CheckoutForm() {
  return (
    <div>
      <h3>Complete seu pedido</h3>
      <FormContainer>
        <FormHeader
          title="Endereço de entrega"
          subtitle="Informe o endereço onde deseja receber seu pedido"
        >
          <MapPinLine size={24} weight="light" className="map-pin-icon" />
        </FormHeader>

        <FormContent />
      </FormContainer>

      <PaymentTypeForm />
    </div>
  )
}
