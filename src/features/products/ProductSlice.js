import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initalStateValue = {
    data: [],
    ispending: false,
    status: 'asdo'
}

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async () => {
        const response = fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        return data
    }
)

const productSlice = createSlice({
  name:'product',
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(getProducts.pending, (state, action) => {
            state.ispending = true;
            state.status = 'pending'
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            return {
                status: 'success',
                ispending: false,
                data: action.payload
            }
        })
        .addCase(getProducts.rejected, (state, action) => {
            return {
                ispending: false,
                status: 'sdid'
            }
        })
  }      
})

export default productSlice