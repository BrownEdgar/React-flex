import { createAction, createSlice } from '@reduxjs/toolkit';
export const increment = createAction('counter/increment')

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    data: [],
    count: 1
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(increment, (state) => {
      state.count = state.count + 1
    })
  }
})

export default todosSlice.reducer;