import { createSlice } from "@reduxjs/toolkit";

const initialCountValue = null

const countSlice = createSlice({
  name: "count",
  initialState: initialCountValue,
  reducers: {
    addCount: (state, action) => {
      state = action.payload.count
      return state
    }
  }
})

export const getCount = (state => state.count)

export default countSlice.reducer
export const { addCount } = countSlice.actions