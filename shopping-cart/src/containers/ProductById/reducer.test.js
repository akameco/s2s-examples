// @flow
import reducer from './reducer'
import * as actions from '../ProductsContainer/actions'

const initialState = {
  addedIds: [],
  quantityById: {},
}

test('provide the initial state', () => {
  // $FlowFixMe
  // expect(reducer(undefined, {})).toEqual(initialState)
})
