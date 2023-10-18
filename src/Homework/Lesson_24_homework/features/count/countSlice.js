import { createSlice } from "@reduxjs/toolkit";

const initialCountValue = 1

const countSlice = createSlice({
  name: "count",
  initialState: initialCountValue,
  reducers: {
    addCount: (state) => {
      state += 1
      return state
    }
  }
})

export const getCount = (state => state.count)

export default countSlice.reducer
export const { addCount } = countSlice.actions