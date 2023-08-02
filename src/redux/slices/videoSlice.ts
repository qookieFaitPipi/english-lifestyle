import { createSlice } from '@reduxjs/toolkit'

interface videoSliceState {
  url: string | null;
}

const initialState: videoSliceState = {
  url: null,
}
export const videoSlice = createSlice({
  name: 'video',
  initialState: initialState,
  reducers: {
    setVideoState: (state, action) => {
      state.url = action.payload;
    },
    deleteVideo: (state) => {
      state.url = null;
    }
  },
})

export const { setVideoState, deleteVideo } = videoSlice.actions

export default videoSlice.reducer 