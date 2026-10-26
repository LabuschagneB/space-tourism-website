import { createSlice } from "@reduxjs/toolkit"

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isNavOpen: false,
  },
  reducers: {
    toggleNav(state) {
      state.isNavOpen = !state.isNavOpen
    },
    closeNav(state) {
      state.isNavOpen = false
    },
  },
})

export const { toggleNav, closeNav } = uiSlice.actions
export default uiSlice.reducer
