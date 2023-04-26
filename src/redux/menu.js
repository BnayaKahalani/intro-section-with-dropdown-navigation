import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: false,
}

export const menuStore = createSlice({
  name: "menuStore",
  initialState,
  reducers: {
    toggleMenu: (state) => { state.value = !state.value }
    ,
  },
})

export const { toggleMenu } = menuStore.actions

export default menuStore.reducer
