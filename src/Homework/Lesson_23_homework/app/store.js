import { configureStore } from "@reduxjs/toolkit";
import CommenstSlice from "../feauters/comments/CommenstSlice";

const store = configureStore({
  reducer: {
    comments: CommenstSlice
  }
})

export default store