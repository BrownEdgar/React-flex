import { createAction, createSlice } from '@reduxjs/toolkit';
export const increment = createAction('counter/increment')

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
    count: 0
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(increment, (state, action) => {
      state.count = state.count + 1
    })
  }
})

export default todosSlice.reducer;