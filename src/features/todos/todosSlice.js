import { createSlice } from '@reduxjs/toolkit';


const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit.",
      completed: false
    }
  ],
  reducers: {

  }
})

export default todosSlice.reducer;