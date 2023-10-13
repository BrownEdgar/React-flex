import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialStateValue = {
  data: [],
  ispending: false,
  status: 'Empty'
}

export const getComments = createAsyncThunk(
  'comments/getComments',
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=10`)
    const data = await response.json();
    return data;
  }
)

const commentsSlice = createSlice({
  name: 'comments',
  initialState: initialStateValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.ispending = true;
        state.status = 'pending'
      })
      .addCase(getComments.fulfilled, (_, action) => {
        return {
          status: 'Success',
          ispending: false,
          data: action.payload
        }
      })
      .addCase(getComments.rejected, (_, action) => {
        return {
          ispending: false,
          status: 'failure',
          data: [],
          error: action.payload
        }
      })
  }
})

export default commentsSlice.reducer