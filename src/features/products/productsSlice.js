import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialStateValue = {
  data: [],
  isPending: false,
  status: 'idle'
}

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();
    return data
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState: initialStateValue,
  reducers: {
    deleteProducts(state, action) {
      const p = state.data.filter(elem => elem.id !== action.payload.id);
      state.data = p;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isPending = true;
        state.status = 'pending'
      })
      .addCase(getProducts.fulfilled, (_, action) => {
        return {
          status: 'success',
          isPending: false,
          data: action.payload
        }
      })
      .addCase(getProducts.rejected, (_, action) => {
        return {
          isPending: false,
          status: 'failure',
          data: [],
          error: action.error
        }
      })
  }
  // extraReducers: {
  //   [getProducts.pending]: (state, action) => {

  //   },
  //   [getProducts.fulfilled]: (state, action) => {

  //   },
  //   [getProducts.rejected]: (state, action) => {

  //   },
  // }
})

export default productSlice.reducer
export const { deleteProducts } = productSlice.actions 