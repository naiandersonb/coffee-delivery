import { produce } from 'immer'
import { Coffee } from '../../data'
import { ActionTypes } from './actions'

interface CoffeeOrders {
  orders: Coffee[]
}

export function ordersReducer(state: CoffeeOrders, actions: any) {
  switch (actions.type) {
    case ActionTypes.ADD_NEW_ORDER:
      return produce(state, (draft) => {
        const order = draft.orders.find(
          (item) => item.id === actions.payload.order.id,
        )
        if (order) return
        draft.orders.push(actions.payload.order)
      })

    case ActionTypes.REMOVE_ORDER:
      return produce(state, (draft) => {
        draft.orders = draft.orders.filter(
          (order) => order.id !== actions.payload.orderId,
        )
      })
    default:
      return state
  }
}
