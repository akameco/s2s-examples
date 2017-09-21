// @flow
import * as shop from '../../api/shop'
import type { ThunkAction, Product } from '../../types'
import { receiveProducts } from '../ProductsContainer/actions'
import * as actions from './actions'

export function getAllProducts(): ThunkAction {
  return dispath => {
    shop.getProducts((products: Product[]) => {
      dispath(receiveProducts(products))
    })
  }
}

export function checkout(products: Product[]): ThunkAction {
  return (dispath, getState) => {
    const cart = getState().CartContainer
    dispath(actions.checkoutRequest())

    shop.buyProducts(products, () => {
      dispath(actions.checkoutSuccess(cart))
    })
  }
}

export function addToCart(productId: number): ThunkAction {
  return (dispath, getState) => {
    if (getState().ProductById[productId].inventory > 0) {
      dispath(actions.addToCart(productId))
    }
  }
}
