import { createSlice } from '@reduxjs/toolkit'

type reviewItem = {
  id: number;
  content: string;
  author: string; 
}

interface reviewSliceState {
  reviewList: reviewItem[];
}

const initialState: reviewSliceState = {
  reviewList: [],
}
export const reviewSlice = createSlice({
  name: 'review',
  initialState: initialState,
  reducers: {
    setReviewsState: (state, action) => {
      state.reviewList = action.payload;
    },
  },
})

export const { setReviewsState } = reviewSlice.actions

export default reviewSlice.reducer 