import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useEffect, useState } from 'react'
import deliveryImg from '../../assets/images/delivery.svg'
import { DeliveryDetails, DeliveryInfo, Flex, SuccessContainer } from './styles'

type OrderFormData = {
  zipCode: string
  totalPayment: number
  street: string
  houseNumber: string
  district: string
  paymentType: string
  city: string
  uf: string
  complement?: string | undefined
}

export function Success() {
  const [order, setOrder] = useState<OrderFormData>()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const orderToLocalStorage = localStorage.getItem(
        '@coffee-delivery:order-1.0.0',
      )

      if (orderToLocalStorage) {
        const orderParse = JSON.parse(orderToLocalStorage)
        setOrder(orderParse)
      }
    }
  }, [])

  return (
    <SuccessContainer>
      <DeliveryInfo>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguadar que logo o café cegará até você</p>

        <DeliveryDetails>
          <Flex>
            <span className="map-icon">
              <MapPin size={16} weight="fill" />
            </span>
            <div>
              <p>
                Entrega em{' '}
                <strong>
                  {order?.street}, {order?.houseNumber}
                </strong>
              </p>
              <p>
                {order?.district} - {order?.city}, {order?.uf}
              </p>
            </div>
          </Flex>

          <Flex>
            <span className="time-icon">
              <Timer size={16} weight="fill" />
            </span>
            <div>
              <p>Previsão de entrega</p>
              <strong>20 min - 30 min</strong>
            </div>
          </Flex>

          <Flex>
            <span className="dollar-icon">
              <CurrencyDollar size={16} />
            </span>
            <div>
              <p>Pagamento na entrega</p>
              <strong>
                {order?.paymentType === 'credit_card' && 'Cartão de Crédito'}
                {order?.paymentType === 'debit_card' && 'Cartão de Débito'}
                {order?.paymentType === 'money' && 'Dinheiro'}
              </strong>
            </div>
          </Flex>
        </DeliveryDetails>
      </DeliveryInfo>

      <img
        src={deliveryImg}
        alt="homem montado em uma motoneta com uma caixa na garupa"
      />
    </SuccessContainer>
  )
}
