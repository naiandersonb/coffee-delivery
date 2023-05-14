import { Trash } from 'phosphor-react'
import { IncrementAndDecrementButton } from '../../../../../../components/IncrementAndDecrementButton'
import { useOrdersContext } from '../../../../../../contexts/OrdersContext'
import { Coffee } from '../../../../../../data'
import { formatCurrency } from '../../../../../../utils/formatCurrency'
import { OrderDetailContainer, OrderInfo, Price, RemoveButton } from './styles'

interface OrderDetailsProps {
  order: Coffee
}

export function OrderDetail({ order }: OrderDetailsProps) {
  const { updateQuantity, removeItemToListOrder } = useOrdersContext()

  const price = formatCurrency(order.price)

  function handleIncrement() {
    const newQuantity = order.quantity + 1
    if (newQuantity < 1) return
    updateQuantity(order.id, newQuantity)
  }

  function handleDecrement() {
    const newQuantity = order.quantity - 1
    if (newQuantity < 1) return
    updateQuantity(order.id, newQuantity)
  }

  return (
    <OrderDetailContainer>
      <OrderInfo>
        <img src={order.image} alt={order.name} />
        <div>
          <p className="title">{order.name}</p>

          <div className="buttons">
            <IncrementAndDecrementButton
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              count={order.quantity}
            />
            <RemoveButton
              onClick={() => removeItemToListOrder(order.id)}
              type="button"
            >
              <Trash size={16} className="trash-icon" />
              remover
            </RemoveButton>
          </div>
        </div>
      </OrderInfo>
      <Price>R$ {price}</Price>
    </OrderDetailContainer>
  )
}
