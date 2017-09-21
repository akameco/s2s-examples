// @flow
import type { Action as CartContainerAction } from '../containers/CartContainer/actionTypes'
import type { Action as ProductsContainerAction } from '../containers/ProductsContainer/actionTypes'

export type Action = CartContainerAction | ProductsContainerAction
