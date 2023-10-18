import { createSlice } from "@reduxjs/toolkit";

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
            
        })
    }
})

export default todosSlice.reducer