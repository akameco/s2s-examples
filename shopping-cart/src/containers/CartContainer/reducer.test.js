// @flow
import reducer from './reducer'
import * as actions from './actions'

const initialState = {
  addedIds: [],
  quantityById: {},
}

test('provide the initial state', () => {
  // $FlowFixMe
  expect(reducer(undefined, {})).toEqual(initialState)
})

test('handle checkoutRequest action', () => {
  expect(reducer(initialState, actions.checkoutRequest())).toEqual(initialState)
})

test('handle addToCart action', () => {
  expect(reducer(initialState, actions.addToCart(1))).toEqual({
    addedIds: [1],
    quantityById: { '1': 1 },
  })
})

test('when product is already in cart handle addToCart action', () => {
  const state = {
    addedIds: [1, 2],
    // $FlowFixMe
    quantityById: { 1: 1, 2: 1 },
  }

  expect(reducer(state, actions.addToCart(2))).toEqual({
    addedIds: [1, 2],
    // $FlowFixMe
    quantityById: { 1: 1, 2: 2 },
  })
})
