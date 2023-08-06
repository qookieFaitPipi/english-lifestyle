import { createSlice } from '@reduxjs/toolkit'

// types
import { VideoSliceState } from '../../@types/types';

const initialState: VideoSliceState = {
  url: undefined,
}
export const videoSlice = createSlice({
  name: 'video',
  initialState: initialState,
  reducers: {
    setVideoState: (state, action) => {
      state.url = action.payload;
    },
    deleteVideo: (state) => {
      state.url = undefined;
    }
  },
})

export const { setVideoState, deleteVideo } = videoSlice.actions

export default videoSlice.reducer 