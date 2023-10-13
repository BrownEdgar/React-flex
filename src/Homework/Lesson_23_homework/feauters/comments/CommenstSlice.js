import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const inittialStateValue = {
  data: {
    original: [],
    filtered: []
  },
  ispending: false,
  status: "idle"
}

export const getComments = createAsyncThunk(
  "comments/getComments",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments")
    const comments = await response.json()
    return comments
  }
)

const CommentsSlice = createSlice({
  name: "comments",
  initialState: inittialStateValue,
  reducers: {
    changeComments: (state, action) => {
      if(action.payload.quantity === "all"){
        state.data.filtered = state.data.original
      }else{
        state.data.filtered = state.data.original.filter(comment => comment.id <= action.payload.quantity)
      }
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getComments.pending, (state) => {
      state.ispending = "true",
      state.status = "pending"
    })
    .addCase(getComments.fulfilled, (_, action) => {
      return {
        ispending: false,
        status: "success",
        data: {
          original: action.payload,
          filtered: action.payload
        }
      }
    })
    .addCase(getComments.rejected, (_, action) => {
      return {
        ispending: false,
        status: "failure",
        data: [],
        error: action.error
      }
    })
  }
})

export default CommentsSlice.reducer
export const {changeComments} = CommentsSlice.actions