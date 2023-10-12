import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "../feauters/products/ProductsSlice";

const store = configureStore({
  reducer: {
    products: ProductsSlice
  }
})

export default store