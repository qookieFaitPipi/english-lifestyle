import { createSlice } from '@reduxjs/toolkit'

type sliderItem = {
  id: number;
  url: string | null;
  content: string | null;
}

interface topSliderSliceState {
  topSliderList: sliderItem[];
  bottomSliderList: sliderItem[];
}

const initialState: topSliderSliceState = {
  topSliderList: [],
  bottomSliderList: [],
}
export const sliderSlice = createSlice({
  name: 'slider',
  initialState: initialState,
  reducers: {
    setTopSliderState: (state, action) => {
      state.topSliderList = action.payload;
    },
    setBottomSliderState: (state, action) => {
      state.bottomSliderList = action.payload;
    },
  },
})

export const { setTopSliderState, setBottomSliderState} = sliderSlice.actions

export default sliderSlice.reducer 