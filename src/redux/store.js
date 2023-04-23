import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from './toggleMenu'

export default configureStore({
  reducer: {
    toggleMenu: toggleReducer
  }
})