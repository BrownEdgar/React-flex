import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialComments = {
    data: {
        original: [],
        filtered: [],
      },
    isPending: false,
    status: "idle"
}

export const getComments = createAsyncThunk(
    "comments/getComments",
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/comments")
        const data = await response.json()
        return data
    }
    )

const commentSlice = createSlice({
    name: "comments",
    initialState: initialComments,
    reducers:{
        filterComments: (state, action) => {
            if(action.payload.count === "all") {
                state.data.filtered = state.data.original
            } else {
                state.data.filtered = state.data.original.filter(elem => elem.id <= action.payload.count)
            }
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getComments.pending, (state) => {
            state.isPending = true,
            state.status = "pending"
        })
        .addCase(getComments.fulfilled, (_, action) => {
            return {
                isPending: false,
                status: "",
                data: {
                    original: action.payload,
                    filtered: action.payload,
                },
                
            }
        })
        .addCase(getComments.rejected, (_, action) => {
            return {
                isPending: false,
                status: "",
                data: [],
                error: action.error
            }
        })
    }
})

export default commentSlice.reducer
export const { filterComments } = commentSlice.actions;