import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchApi } from "./productApi";

const initalStateValue = {
    data: [],
    ispending: false,
    status: 'isde'

}


export const getProducts = createAsyncThunk(
    'products/getProducts',
    () => {
        return fetchApi('https://jsonplaceholder.typicode.com/comments')
    }
)


const productSlice = createSlice({
    name: 'products',
    initialState: initalStateValue,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state) => {
            state.ispending = true;
            state.status = 'pending'
        })
        .addCase(getProducts.fulfilled, (_, action) => {
            return{
                status: 'success',
                ispending: false,
                data: action.payload
            }
        })
        .addCase(getProducts.rejected, (_, action) => {
            console.log(action);
            return {
                ispending:false,
                status: 'failure',
                data: [],
                error: action.payload
            }
        })
    }   
})

export default productSlice.reducer