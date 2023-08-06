import { createSlice } from '@reduxjs/toolkit'

// types
import { PriceSliceState } from '../../@types/types';

const initialState: PriceSliceState = {
  state1: [],
  state2: [],
  state3: []
}
export const priceSlice = createSlice({
  name: 'price',
  initialState: initialState,
  reducers: {
    setPriceItems: (state, action) => {
      state.state1 = action.payload.state1;
      state.state2 = action.payload.state2;
      state.state3 = action.payload.state3;
    },
    addPriceItem: (state, action) => {
      if(Number(action.payload.addNum) === 1) {
        state.state1.push({id: action.payload.id, value: action.payload.value, old_value: action.payload.oldValue, points: action.payload.points})
       } else if(Number(action.payload.addNum) === 2) {
        state.state2.push({id: action.payload.id, value: action.payload.value, old_value: action.payload.oldValue, points: action.payload.points})
      } else if(Number(action.payload.addNum) === 3) {
        state.state3.push({id: action.payload.id, value: action.payload.value, old_value: action.payload.oldValue, points: action.payload.points})
      }
    },
    deletePriceItem: (state, action) => {
      if(Number(action.payload) === 1) {
        state.state1.splice(state.state1.length-1, 1);
       } else if(Number(action.payload) === 2) {
        state.state2.splice(state.state2.length-1, 1);
      } else if(Number(action.payload) === 3) {
        state.state3.splice(state.state3.length-1, 1);
      }
    }
  },
})

export const { setPriceItems, addPriceItem, deletePriceItem } = priceSlice.actions

export default priceSlice.reducer 