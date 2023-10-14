import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProductAPI } from './ProductAPI';

const initialStateValue = {
  data: [],
  ispending: false,
  status: 'idle'
}

export const getProducts = createAsyncThunk(
  'products/getProducts',
  () => {
    return fetchProductAPI('https://fakestoreapi.com/products')
  }
)

const productSlice = createSlice({
  name: 'products',
  initialState: initialStateValue,
  reducers: {
    delteProducts(state, action) {
      const p = state.data.filter(elem => elem.id !== action.payload.id);
      state.data = p;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.ispending = true;
        state.status = 'pending'
      })
      .addCase(getProducts.fulfilled, (_, action) => {
        return {
          status: "success",
          ispending: false,
          data: action.payload
        }
      })
      .addCase(getProducts.rejected, (_, action) => {
        console.log(action)
        return {
          ispending: false,
          status: "failure",
          data: [],
          error: action.error
        }
      })
  }
  // extraReducers: {
  //   [getProducts.pending]: (state,action ) => {

  //   },
  //   [getProducts.fulfilled]: (state,action ) => {

  //   },
  //   [getProducts.rejected]: (state,action ) => {

  //   },
  //   'todos/addTodo': () => {

  //   }
  // }
})

export default productSlice.reducer
export const { delteProducts } = productSlice.actions 