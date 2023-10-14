import { configureStore } from "@reduxjs/toolkit";
import productSlice from "../feautures/products/productsSlice"

const store = configureStore({
    reducer: {
        products: productSlice 
    }
})

export default store