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