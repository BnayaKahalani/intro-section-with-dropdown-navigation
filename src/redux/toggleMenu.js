import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: false,
}

export const toggleMenuSlice = createSlice({
  name: "toggleMenu",
  initialState,
  reducers: {
    toggleMenu: (state) =>
      state.value = !state.value
    ,
  },
})

export const { toggleMenu } = toggleMenuSlice.actions

export default toggleMenuSlice.reducer
