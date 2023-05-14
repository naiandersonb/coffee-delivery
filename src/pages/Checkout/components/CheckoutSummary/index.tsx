import { useEffect, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { useOrdersContext } from '../../../../contexts/OrdersContext'
import { formatCurrency } from '../../../../utils/formatCurrency'
import { OrderDetail } from './components/OrderDetail'
import {
  ConfirmOrderButton,
  CurrencyDetail,
  SummaryContainer,
} from './components/styles'

const DELIVERY_FEE = 3.59

export function CheckoutSummary() {
  const { orders } = useOrdersContext()
  const { setValue } = useFormContext()

  const totalValueItems = useMemo(() => {
    const totalValues = orders.map((order) => {
      return order.price * order.quantity
    })

    const total = totalValues.reduce((total, value) => total + value, 0)

    const formattedValue = formatCurrency(total)

    return formattedValue ?? 0
  }, [orders])

  const finalPrice =
    parseFloat(totalValueItems.replace(',', '.')) + DELIVERY_FEE
  const totalOrder = formatCurrency(finalPrice)

  useEffect(() => {
    setValue('totalPayment', finalPrice)
  }, [finalPrice, setValue])

  return (
    <div>
      <h3>Cafés selecionados</h3>

      <SummaryContainer>
        <div>
          {orders &&
            orders.map((order) => {
              return <OrderDetail key={order.id} order={order} />
            })}
        </div>

        <div style={{ marginTop: '1rem' }}>
          <CurrencyDetail>
            <p>Total de itens</p>
            <p>R$ {totalValueItems}</p>
          </CurrencyDetail>
          <CurrencyDetail>
            <p>Entrega</p>
            <p>R$ 3,59</p>
          </CurrencyDetail>
          <CurrencyDetail>
            <strong>Total</strong>
            <strong>R$ {totalOrder}</strong>
          </CurrencyDetail>
        </div>

        <ConfirmOrderButton type="submit">Confirmar pedido</ConfirmOrderButton>
      </SummaryContainer>
    </div>
  )
}
