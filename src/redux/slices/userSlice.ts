import { createSlice } from '@reduxjs/toolkit'

// types
import { UserSliceState } from '../../@types/types';

const initialState: UserSliceState = {
  userLogin: undefined,
  isEntered: false,
  selectedSlice: 0,
  accessToken: undefined
}
export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.userLogin = action.payload.userLogin;
      state.isEntered = true;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state) => {
      state.userLogin = undefined;
      state.isEntered = false;
      state.accessToken = undefined;
    },
    setSelectedSlice: (state, action) => {
      state.selectedSlice = action.payload;
    },
  },
})

export const { login, logout, setSelectedSlice } = userSlice.actions

export default userSlice.reducer 