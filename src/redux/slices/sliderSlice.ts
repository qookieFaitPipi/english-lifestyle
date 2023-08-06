import { createSlice } from '@reduxjs/toolkit';

// types
import { TopSliderSliceState } from '../../@types/types';

const initialState: TopSliderSliceState = {
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
    addTopSliderItem: (state, action) => {
      state.topSliderList.push(action.payload);
    },
    deleteTopSliderItem: (state, action) => {
      state.topSliderList.splice(Number(action.payload)-1, 1);
    },

    setBottomSliderState: (state, action) => {
      state.bottomSliderList = action.payload;
    },
    addBottomSliderItem: (state, action) => {
      state.bottomSliderList.push(action.payload);
    },
    deleteBottomSliderItem: (state, action) => {
      state.bottomSliderList.splice(Number(action.payload)-1, 1);
    },
  },
})

export const { setTopSliderState, setBottomSliderState, addTopSliderItem, deleteTopSliderItem, addBottomSliderItem, deleteBottomSliderItem } = sliderSlice.actions

export default sliderSlice.reducer 