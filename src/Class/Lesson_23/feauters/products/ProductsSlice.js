import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const inittialStateValue = {
  data: [],
  ispending: false,
  status: "idle"
}

// export const getPorducts = createAsyncThunk(
//   "products/getProducts",
//   async () => {
//     const response = await fetch("https://fakestoreapi.com/products")
//     const data = await response.json()
//     return data
//   }
// )

export const getPorducts = createAsyncThunk(
  "products/getProducts",
  () => {
    return fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => data)
  }
)

const productSlice = createSlice({
  name: "products",
  initialState: inittialStateValue,
  reducers: {
    deleteProducts(state, action){
      const p = state.data.filter(product => product.id !== action.payload.id)
      state.data = p
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(getPorducts.pending, (state) => {
      state.ispending = true;
      state.status = "pending"
    })
    .addCase(getPorducts.fulfilled, (_, action) => {
      return {
        status: "success",
        ispending: false,
        data: action.payload
      }
    })
    .addCase(getPorducts.rejected, (_, action) => {
      return {
        ispending: false,
        status: "failure",
        data: [],
        error: action.error
      }
    })
  }
})

export default productSlice.reducer
export const {deleteProducts} = productSlice.actions