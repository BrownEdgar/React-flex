import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



const initialStateValue = {
  data: [],
  ispending: false,
  status: 'Empty'
}

export const getselectComments = createAsyncThunk(
  'select/getSelect',
  async (limit) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`)
    const data = await response.json();
    return data;
  }
)

const selectComments = createSlice({
  name: 'select',
  initialState: initialStateValue,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getselectComments.pending, (state) => {
        state.ispending = true;
        state.status = 'pending'
      })
      .addCase(getselectComments.fulfilled, (_, action) => {
        return {
          status: 'Success',
          ispending: false,
          data: action.payload
        }
      })
      .addCase(getselectComments.rejected, (_, action) => {
        return {
          ispending: false,
          status: 'failure',
          data: [],
          error: action.payload
        }
      })
  }
})

export default selectComments.reducer