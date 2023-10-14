import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: 'todos',
    initialState: [
        {
            id: 1,
            name: 'Vaag',
            age: 3
        }
    ],
    reducers: {}
})

export default todosSlice.reducer