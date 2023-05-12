import { Coffee } from '../../data'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_NEW_ORDER = 'ADD_NEW_ORDER',
  REMOVE_ORDER = 'UPDATE_ORDER',
}

export function addNewOrderAction(newOrder: Coffee, quantity: number) {
  const order: Coffee = {
    ...newOrder,
    quantity,
  }
  return {
    type: ActionTypes.ADD_NEW_ORDER,
    payload: { order },
  }
}

export function removeOrderAction(orderId: string) {
  return {
    type: ActionTypes.REMOVE_ORDER,
    payload: { orderId },
  }
}
