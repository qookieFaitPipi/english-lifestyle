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
    addTopSliderItem: (state, action) => {
      state.topSliderList.push(action.payload);
    },
    deleteTopSliderItem: (state, action) => {
      state.topSliderList.splice(Number(action.payload)-1, 1);
    }
  },
})

export const { setTopSliderState, setBottomSliderState, addTopSliderItem, deleteTopSliderItem} = sliderSlice.actions

export default sliderSlice.reducer 