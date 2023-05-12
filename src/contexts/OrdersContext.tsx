import { ReactNode, createContext, useContext, useReducer } from 'react'
import { Coffee } from '../data'
import {
  addNewOrderAction,
  removeOrderAction,
} from '../reducers/orders/actions'
import { ordersReducer } from '../reducers/orders/reducers'

interface OrdersContextProviderProps {
  children: ReactNode
}

interface OrdersContextProps {
  addNewItem: (order: Coffee, quantity: number) => void
  removeItemToListOrder: (orderId: string) => void
  orders: Coffee[]
  totalOrders: number
}

export const OrdersContext = createContext({} as OrdersContextProps)

export function OrdersContextProvider({
  children,
}: OrdersContextProviderProps) {
  const [ordersState, dispatch] = useReducer(ordersReducer, { orders: [] })

  const { orders } = ordersState

  const totalOrders = orders.length > 0 ? orders.length : 0

  const addNewItem = (order: Coffee, quantity: number) => {
    dispatch(addNewOrderAction(order, quantity))
  }

  const removeItemToListOrder = (orderId: string) => {
    dispatch(removeOrderAction(orderId))
  }

  return (
    <OrdersContext.Provider
      value={{ addNewItem, orders, removeItemToListOrder, totalOrders }}
    >
      {children}
    </OrdersContext.Provider>
  )
}

export const useOrdersContext = () => useContext(OrdersContext)
