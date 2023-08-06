import { createSlice } from '@reduxjs/toolkit'

// types
import { ReviewSliceState } from '../../@types/types';

const initialState: ReviewSliceState = {
  reviewList: [],
}
export const reviewSlice = createSlice({
  name: 'review',
  initialState: initialState,
  reducers: {
    setReviewsState: (state, action) => {
      state.reviewList = action.payload;
    },
    addReviewsItem: (state, action) => {
      state.reviewList.push(action.payload);
    },
    deleteReviewsItem: (state, action) => {
      state.reviewList.splice(Number(action.payload)-1, 1);
    }
  },
})

export const { setReviewsState, deleteReviewsItem, addReviewsItem } = reviewSlice.actions

export default reviewSlice.reducer 