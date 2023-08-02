import { createSlice } from '@reduxjs/toolkit'

type price = {
  id: number;
  value: number;
  pointers: string[];
}

type priceItem = {
  priceItem: price[]
}

interface topSliderSliceState {
  priceList: priceItem[];
}

const initialState: topSliderSliceState = {
  priceList: [],
}
export const priceSlice = createSlice({
  name: 'price',
  initialState: initialState,
  reducers: {
    setPriceState: (state, action) => {
      state.priceList = action.payload;
    }
  },
})

export const { setPriceState } = priceSlice.actions

export default priceSlice.reducer 