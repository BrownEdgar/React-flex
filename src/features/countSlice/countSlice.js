import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name: "count",
    initialState: null,
    reducers: {
        increment: (state) => {
        state.value += 1;
    }
}
})

export const { increment } = countSlice.actions;
export const selectCount = (state) => state.count;
export default countSlice.reducer;