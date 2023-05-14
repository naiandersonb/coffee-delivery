import { Coffee } from '../../data'

/* eslint-disable no-unused-vars */
export enum ActionTypes {
  ADD_NEW_ORDER = 'ADD_NEW_ORDER',
  REMOVE_ORDER = 'UPDATE_ORDER',
  UPDATE_QUANTITY = 'UPDATE_QUANTITY',
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

export function updateQuantityAction(orderId: string, quantity: number) {
  return {
    type: ActionTypes.UPDATE_QUANTITY,
    payload: { orderId, quantity },
  }
}
