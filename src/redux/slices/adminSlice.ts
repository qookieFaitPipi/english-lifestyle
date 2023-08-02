import { createSlice } from '@reduxjs/toolkit'

interface userSliceState {
  userLogin: string | null;
  isEntered: boolean;
  selectedSlice: number
}

const initialState: userSliceState = {
  userLogin: null,
  isEntered: false,
  selectedSlice: 0,
}
export const adminSlice = createSlice({
  name: 'price',
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      state.userLogin = action.payload;
      state.isEntered = true;
    },
    logout: (state) => {
      state.userLogin = null;
      state.isEntered = false;
    },
    setSelectedSlice: (state, action) => {
      state.selectedSlice = action.payload;
    },
  },
})

export const { login, logout, setSelectedSlice } = adminSlice.actions

export default adminSlice.reducer 