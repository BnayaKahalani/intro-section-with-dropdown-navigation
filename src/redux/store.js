import { configureStore } from "@reduxjs/toolkit";
import menuStore from './menu'

export default configureStore({
  reducer: {
    menuStore,
  },
})