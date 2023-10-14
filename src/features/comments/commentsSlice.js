import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const inittialStateValue = {
  data: {
    original: [],
    filtered: [],
  },
  isPending: false,
  status: "idle",
};

export const getComments = createAsyncThunk(
  "comments/getComments",
  async () => {
    const data = await fetch(
      "https://jsonplaceholder.typicode.com/comments?_limit=30"
    );
    const res = await data.json();
    return res;
  }
);

const CommentsSlice = createSlice({
  name: "comments",
  initialState: inittialStateValue,
  reducers: {
    filterComments: (state, action) => {
      if (action.payload.count === "all") {
        state.data.filtered = state.data.original;
      } else {
        state.data.filtered = state.data.original.filter(
          (comment) => comment.id <= action.payload.count
        );
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.isPending = "true";
        state.status = "pending";
      })
      .addCase(getComments.fulfilled, (_, action) => {
        return {
          ispending: false,
          status: "success",
          data: {
            original: action.payload,
            filtered: action.payload,
          },
        };
      })
      .addCase(getComments.rejected, (_, action) => {
        return {
          ispending: false,
          status: "failure",
          data: [],
          error: action.error,
        };
      });
  },
});

export default CommentsSlice.reducer;
export const { filterComments } = CommentsSlice.actions;
